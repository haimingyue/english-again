"""Same-origin analytics API and private administration for English Again."""
import csv
import hashlib
import io
import ipaddress
import os
import re
import secrets
import sqlite3
import time
from datetime import datetime, timedelta, timezone
from functools import wraps
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit

from flask import Flask, Response, g, jsonify, request, send_from_directory, stream_with_context
from werkzeug.exceptions import HTTPException
from werkzeug.security import check_password_hash, generate_password_hash

ROOT = Path(__file__).resolve().parent
SHANGHAI = timezone(timedelta(hours=8))
KINDS = {"pageview", "download", "video", "outbound"}
COOKIE = "ea_admin"
SCHEMA = """
CREATE TABLE IF NOT EXISTS admins (username TEXT PRIMARY KEY, password_hash TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, username TEXT NOT NULL, csrf TEXT NOT NULL, expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS attempts (ip TEXT NOT NULL, created_at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS attempts_time ON attempts(created_at);
CREATE TABLE IF NOT EXISTS records (
 id INTEGER PRIMARY KEY, event_id TEXT NOT NULL UNIQUE, created_at INTEGER NOT NULL,
 kind TEXT NOT NULL, path TEXT NOT NULL, title TEXT NOT NULL, referrer TEXT NOT NULL,
 target TEXT NOT NULL, label TEXT NOT NULL, visitor_id TEXT NOT NULL, session_id TEXT NOT NULL,
 ip TEXT NOT NULL, device TEXT NOT NULL, browser TEXT NOT NULL, os TEXT NOT NULL,
 language TEXT NOT NULL, screen TEXT NOT NULL, user_agent TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS records_time ON records(created_at DESC, id DESC);
CREATE INDEX IF NOT EXISTS records_path_time ON records(path, created_at DESC);
CREATE INDEX IF NOT EXISTS records_kind_time ON records(kind, created_at DESC);
CREATE INDEX IF NOT EXISTS records_visitor ON records(visitor_id);
CREATE INDEX IF NOT EXISTS records_ip_time ON records(ip, created_at DESC);
"""


def connect(path):
    db = sqlite3.connect(path, timeout=10)
    db.row_factory = sqlite3.Row
    db.execute("PRAGMA busy_timeout=10000")
    return db


def init_db(path):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    db = connect(path)
    db.execute("PRAGMA journal_mode=WAL")
    db.executescript(SCHEMA)
    db.close()
    os.chmod(path, 0o600)


def password_hash(password):
    return generate_password_hash(password, method="pbkdf2:sha256:1000000")


def normalize_path(value):
    if not isinstance(value, str) or len(value) > 1000 or not value.startswith("/") or value.startswith("//"):
        raise ValueError("页面地址无效")
    path = value.split("?", 1)[0].split("#", 1)[0].rstrip("/")
    if path.endswith(".html"):
        path = path[:-5]
    return ("/" if path == "/index" else path) or "/"


def clean_text(value, length):
    if not isinstance(value, str):
        raise ValueError("记录字段格式无效")
    return "".join(c for c in value if c >= " " and c != "\x7f")[:length]


def clean_url(value):
    value = clean_text(value, 2000)
    if not value:
        return ""
    try:
        url = urlsplit(value)
        if url.scheme not in {"http", "https"} or not url.hostname:
            return ""
        # Never retain credentials, query strings or fragments from referring URLs.
        return urlunsplit((url.scheme, url.netloc.rsplit("@", 1)[-1], url.path, "", ""))
    except ValueError:
        return ""


def device_info(ua):
    device = "tablet" if re.search(r"iPad|Tablet|Android(?!.*Mobile)", ua, re.I) else "mobile" if re.search(r"Mobile|iPhone|Android", ua, re.I) else "desktop"
    browser = next((name for pattern, name in [(r"Edg/|EdgiOS|EdgA", "Edge"), (r"OPR/", "Opera"), (r"Firefox|FxiOS", "Firefox"), (r"Chrome|CriOS", "Chrome"), (r"Safari", "Safari")] if re.search(pattern, ua)), "其他")
    system = next((name for pattern, name in [(r"iPhone|iPad", "iOS"), (r"Android", "Android"), (r"Windows", "Windows"), (r"Macintosh|Mac OS", "macOS"), (r"Linux", "Linux")] if re.search(pattern, ua)), "其他")
    return device, browser, system


def csv_cell(value):
    text = str(value or "")
    # Spreadsheet programs interpret these prefixes as formulas, even in quoted CSV.
    return "'" + text if text.lstrip().startswith(("=", "+", "-", "@")) or text.startswith(("\t", "\r", "\n")) else text


def create_app(test_config=None):
    app = Flask(__name__, static_folder=None)
    app.config.update(
        DATABASE=os.environ.get("ANALYTICS_DB", str(ROOT.parent / ".data/analytics.sqlite3")),
        SITE_ORIGIN=os.environ.get("SITE_ORIGIN", "https://english.tlpy8.com"),
        COOKIE_SECURE=os.environ.get("COOKIE_SECURE", "1") == "1",
        TRUST_PROXY=os.environ.get("TRUST_PROXY", "0") == "1",
        MAX_CONTENT_LENGTH=8192,
    )
    if test_config:
        app.config.update(test_config)
    init_db(app.config["DATABASE"])

    def db():
        if "db" not in g:
            g.db = connect(app.config["DATABASE"])
        return g.db

    @app.teardown_appcontext
    def close_db(error=None):
        connection = g.pop("db", None)
        if connection is not None:
            connection.close()

    def fail(message, status=400):
        return jsonify(error=message), status

    def client_ip():
        value = request.headers.get("X-Real-IP", "") if app.config["TRUST_PROXY"] else request.remote_addr
        try:
            return str(ipaddress.ip_address(value or ""))
        except ValueError:
            return "unknown"

    def session():
        if "admin_session" not in g:
            token = request.cookies.get(COOKIE, "")
            g.admin_session = db().execute("SELECT * FROM sessions WHERE token_hash=? AND expires>?", (hashlib.sha256(token.encode()).hexdigest(), int(time.time()))).fetchone() if token else None
        return g.admin_session

    def protected(fn):
        @wraps(fn)
        def wrapped(*args, **kwargs):
            if not session():
                return fail("登录已过期，请重新登录", 401)
            if request.method != "GET" and not secrets.compare_digest(request.headers.get("X-CSRF-Token", ""), session()["csrf"]):
                return fail("请求校验失败，请刷新页面", 403)
            return fn(*args, **kwargs)
        return wrapped

    @app.before_request
    def same_origin():
        if request.method in {"POST", "PUT", "PATCH", "DELETE"}:
            if request.headers.get("Origin") != app.config["SITE_ORIGIN"]:
                return fail("不允许跨站请求", 403)
            if not request.is_json:
                return fail("请求必须为 JSON", 415)

    @app.after_request
    def headers(response):
        if not request.path.startswith(("/admin", "/api/analytics/")):
            return response
        response.headers.update({
            "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY", "Referrer-Policy": "same-origin",
            "X-Robots-Tag": "noindex, nofollow",
            "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'",
        })
        return response

    @app.errorhandler(HTTPException)
    def http_error(error):
        return fail("请求格式无效" if error.code == 400 else error.name, error.code)

    @app.errorhandler(ValueError)
    def bad_value(error):
        return fail(str(error))

    def body():
        data = request.get_json()
        if not isinstance(data, dict):
            raise ValueError("请求内容必须为对象")
        return data

    @app.get("/admin/")
    def admin_page():
        return send_from_directory(ROOT / "static", "index.html")

    @app.get("/admin/<name>")
    def admin_asset(name):
        if name not in {"admin.js", "admin.css"}:
            return fail("Not found", 404)
        return send_from_directory(ROOT / "static", name)

    @app.get("/api/analytics/health")
    def health():
        db().execute("SELECT 1 FROM records LIMIT 1")
        return jsonify(ok=True)

    @app.post("/api/analytics/collect")
    def collect():
        data = body()
        kind = data.get("kind")
        if not isinstance(kind, str) or kind not in KINDS:
            raise ValueError("事件类型无效")
        path = normalize_path(data.get("path"))
        if re.match(r"^/(admin|api|_nuxt)(/|$)", path):
            return "", 204
        ua = clean_text(request.headers.get("User-Agent", ""), 1000)
        if re.search(r"bot\b|crawler|spider|HeadlessChrome", ua, re.I):
            return "", 204
        ids = [data.get(key, "") for key in ("event_id", "visitor_id", "session_id")]
        if not all(isinstance(value, str) and re.fullmatch(r"[a-zA-Z0-9_-]{16,64}", value) for value in ids):
            raise ValueError("记录标识无效")
        ip = client_ip()
        now = int(time.time())
        if db().execute("SELECT COUNT(*) FROM records WHERE ip=? AND created_at>?", (ip, now - 60)).fetchone()[0] >= 300:
            return fail("请求过于频繁", 429)
        device, browser, system = device_info(ua)
        values = (ids[0], now, kind, path, clean_text(data.get("title", ""), 250), clean_url(data.get("referrer", "")), clean_url(data.get("target", "")), clean_text(data.get("label", ""), 150), ids[1], ids[2], ip, device, browser, system, clean_text(data.get("language", ""), 50), clean_text(data.get("screen", ""), 30), ua)
        db().execute("INSERT OR IGNORE INTO records (event_id,created_at,kind,path,title,referrer,target,label,visitor_id,session_id,ip,device,browser,os,language,screen,user_agent) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", values)
        db().commit()
        return "", 204

    @app.post("/api/analytics/login")
    def login():
        data = body()
        username = clean_text(data.get("username", ""), 64)
        password = data.get("password", "")
        if not isinstance(password, str) or len(password) > 256:
            raise ValueError("密码格式无效")
        now, ip = int(time.time()), client_ip()
        db().execute("DELETE FROM attempts WHERE created_at<?", (now - 900,))
        db().execute("DELETE FROM sessions WHERE expires<?", (now,))
        attempts = db().execute("SELECT COUNT(*) FROM attempts WHERE ip=?", (ip,)).fetchone()[0]
        if attempts >= 10:
            db().commit()
            return fail("登录尝试过多，请 15 分钟后重试", 429)
        db().execute("INSERT INTO attempts VALUES (?,?)", (ip, now))
        db().commit()
        admin = db().execute("SELECT * FROM admins WHERE username=?", (username,)).fetchone()
        # Same expensive hash check for unknown users.
        valid = check_password_hash(admin["password_hash"] if admin else app.config["DUMMY_HASH"], password)
        if not admin or not valid:
            return fail("账号或密码不正确", 401)
        token, csrf = secrets.token_urlsafe(32), secrets.token_urlsafe(32)
        old = request.cookies.get(COOKIE, "")
        db().execute("DELETE FROM sessions WHERE token_hash=?", (hashlib.sha256(old.encode()).hexdigest(),))
        db().execute("DELETE FROM attempts WHERE ip=?", (ip,))
        db().execute("INSERT INTO sessions VALUES (?,?,?,?)", (hashlib.sha256(token.encode()).hexdigest(), username, csrf, now + 43200))
        db().commit()
        response = jsonify(username=username, csrf=csrf)
        response.set_cookie(COOKIE, token, max_age=43200, secure=app.config["COOKIE_SECURE"], httponly=True, samesite="Strict", path="/api/analytics")
        return response

    @app.get("/api/analytics/me")
    @protected
    def me():
        return jsonify(username=session()["username"], csrf=session()["csrf"])

    @app.post("/api/analytics/logout")
    @protected
    def logout():
        db().execute("DELETE FROM sessions WHERE token_hash=?", (session()["token_hash"],))
        db().commit()
        response = jsonify(ok=True)
        response.delete_cookie(COOKIE, path="/api/analytics", secure=app.config["COOKIE_SECURE"], httponly=True, samesite="Strict")
        return response

    @app.post("/api/analytics/password")
    @protected
    def change_password():
        data = body()
        old, new = data.get("current", ""), data.get("password", "")
        if not isinstance(new, str) or not 12 <= len(new) <= 128 or not isinstance(old, str) or len(old) > 256:
            raise ValueError("新密码需要 12–128 个字符")
        admin = db().execute("SELECT * FROM admins WHERE username=?", (session()["username"],)).fetchone()
        if not check_password_hash(admin["password_hash"], old):
            return fail("当前密码不正确", 400)
        db().execute("UPDATE admins SET password_hash=? WHERE username=?", (password_hash(new), admin["username"]))
        db().execute("DELETE FROM sessions WHERE username=?", (admin["username"],))
        db().commit()
        response = jsonify(ok=True)
        response.delete_cookie(COOKIE, path="/api/analytics")
        return response

    def filters():
        clauses, params = ["1=1"], []
        start, end = request.args.get("start", ""), request.args.get("end", "")
        dates = []
        for value, op, extra in [(start, ">=", 0), (end, "<", 1)]:
            if value:
                try:
                    parsed = datetime.strptime(value, "%Y-%m-%d").replace(tzinfo=SHANGHAI)
                except ValueError:
                    raise ValueError("日期格式应为 YYYY-MM-DD")
                dates.append(parsed)
                clauses.append(f"created_at {op} ?")
                params.append(int((parsed + timedelta(days=extra)).timestamp()))
        if len(dates) == 2 and dates[0] > dates[1]:
            raise ValueError("开始日期不能晚于结束日期")
        for key in ("kind", "path", "device", "visitor_id", "session_id", "ip", "browser", "os"):
            value = request.args.get(key, "").strip()
            if value:
                if len(value) > 500:
                    raise ValueError("筛选内容过长")
                if key == "kind" and value not in KINDS:
                    raise ValueError("事件类型无效")
                clauses.append(f"{key}=?")
                params.append(normalize_path(value) if key == "path" else value)
        q = request.args.get("q", "").strip()
        if len(q) > 200:
            raise ValueError("关键词不能超过 200 个字符")
        if q:
            cols = ("path", "title", "ip", "referrer", "target", "label", "visitor_id", "session_id", "browser", "os")
            clauses.append("(" + " OR ".join(f"{col} LIKE ? ESCAPE '\\'" for col in cols) + ")")
            needle = "%" + q.replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_") + "%"
            params.extend([needle] * len(cols))
        return " AND ".join(clauses), params

    def record(row):
        item = dict(row)
        item["time"] = datetime.fromtimestamp(item["created_at"], SHANGHAI).strftime("%Y-%m-%d %H:%M:%S")
        return item

    @app.get("/api/analytics/records")
    @protected
    def records():
        where, params = filters()
        try:
            page, size = int(request.args.get("page", 1)), int(request.args.get("size", 25))
        except ValueError:
            raise ValueError("分页参数无效")
        if not 1 <= page <= 10000000 or not 1 <= size <= 100:
            raise ValueError("分页参数超出范围")
        order = request.args.get("order", "desc")
        if order not in {"asc", "desc"}:
            raise ValueError("排序参数无效")
        total = db().execute(f"SELECT COUNT(*) FROM records WHERE {where}", params).fetchone()[0]
        rows = db().execute(f"SELECT * FROM records WHERE {where} ORDER BY created_at {order}, id {order} LIMIT ? OFFSET ?", params + [size, (page - 1) * size]).fetchall()
        return jsonify(items=[record(row) for row in rows], total=total, page=page, size=size)

    @app.get("/api/analytics/summary")
    @protected
    def summary():
        where, params = filters()
        row = db().execute(f"SELECT COUNT(*) AS records, COALESCE(SUM(kind='pageview'),0) AS pageviews, COUNT(DISTINCT visitor_id) AS visitors, COUNT(DISTINCT session_id) AS sessions, COALESCE(SUM(kind='download'),0) AS downloads FROM records WHERE {where}", params).fetchone()
        pages = db().execute(f"SELECT path, COUNT(*) AS count FROM records WHERE {where} AND kind='pageview' GROUP BY path ORDER BY count DESC, path LIMIT 8", params).fetchall()
        daily = db().execute(f"SELECT date(created_at,'unixepoch','+8 hours') AS day, COUNT(*) AS count FROM records WHERE {where} AND kind='pageview' GROUP BY day ORDER BY day DESC LIMIT 31", params).fetchall()
        return jsonify(**dict(row), pages=[dict(p) for p in pages], daily=[dict(d) for d in reversed(daily)])

    @app.get("/api/analytics/records/<int:record_id>")
    @protected
    def detail(record_id):
        row = db().execute("SELECT * FROM records WHERE id=?", (record_id,)).fetchone()
        return jsonify(record(row)) if row else fail("记录不存在", 404)

    @app.get("/api/analytics/export")
    @protected
    def export():
        where, params = filters()
        order = request.args.get("order", "desc")
        if order not in {"asc", "desc"}:
            raise ValueError("排序参数无效")
        columns = ["id", "time", "kind", "path", "title", "referrer", "target", "label", "visitor_id", "session_id", "ip", "device", "browser", "os", "language", "screen", "user_agent"]
        labels = ["记录ID", "访问时间（北京时间）", "类型", "页面", "页面标题", "来源", "目标链接", "点击内容", "访客标识", "会话标识", "IP", "设备", "浏览器", "系统", "语言", "屏幕", "User-Agent"]
        @stream_with_context
        def generate():
            yield "\ufeff"
            output = io.StringIO()
            writer = csv.writer(output)
            writer.writerow(labels)
            yield output.getvalue()
            cursor = db().execute(f"SELECT * FROM records WHERE {where} ORDER BY created_at {order}, id {order}", params)
            for row in cursor:
                output.seek(0)
                output.truncate(0)
                item = record(row)
                writer.writerow([csv_cell(item[key]) for key in columns])
                yield output.getvalue()
        filename = datetime.now(SHANGHAI).strftime("visits-%Y%m%d-%H%M%S.csv")
        return Response(generate(), content_type="text/csv; charset=utf-8", headers={"Content-Disposition": f'attachment; filename="{filename}"'})

    app.config["DUMMY_HASH"] = password_hash(secrets.token_urlsafe(24))
    return app
