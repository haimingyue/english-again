import csv
import io
import json
import sys
import tempfile
import time
import unittest
import uuid
from datetime import datetime, timezone, timedelta
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from app import create_app, connect, password_hash

ORIGIN = "https://english.test"
PASSWORD = "test-only-long-password-123"

class AnalyticsTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.hashed = password_hash(PASSWORD)

    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.path = str(Path(self.temp.name) / "test.db")
        self.app = create_app({"TESTING": True, "DATABASE": self.path, "SITE_ORIGIN": ORIGIN, "COOKIE_SECURE": False})
        self.client = self.app.test_client()
        with connect(self.path) as db:
            db.execute("INSERT INTO admins VALUES (?,?)", ("admin", self.hashed))

    def tearDown(self):
        self.temp.cleanup()

    def post(self, route, data, **kwargs):
        headers = {"Origin": ORIGIN, **kwargs.pop("headers", {})}
        return self.client.post("/api/analytics/" + route, json=data, headers=headers, **kwargs)

    def login(self):
        response = self.post("login", {"username": "admin", "password": PASSWORD})
        self.assertEqual(response.status_code, 200)
        return response.json["csrf"]

    def event(self, **kwargs):
        return {"event_id": str(uuid.uuid4()), "visitor_id": "v" * 24, "session_id": "s" * 24, "kind": "pageview", "path": "/reading.html?token=secret#section", "title": "阅读", "referrer": "https://example.com/path?secret=yes#top", **kwargs}

    def test_auth_origin_cookie_logout(self):
        self.assertEqual(self.client.get("/api/analytics/records").status_code, 401)
        self.assertEqual(self.client.get("/api/analytics/export").status_code, 401)
        self.assertEqual(self.client.post("/api/analytics/login", json={}).status_code, 403)
        self.assertEqual(self.post("login", {"username": "admin", "password": "wrong"}).status_code, 401)
        csrf = self.login()
        self.assertEqual(self.post("logout", {}).status_code, 403)
        self.assertEqual(self.post("logout", {}, headers={"X-CSRF-Token": csrf}).status_code, 200)
        self.assertEqual(self.client.get("/api/analytics/me").status_code, 401)

    def test_collect_normalization_dedup_and_details(self):
        data = self.event()
        for _ in range(2):
            self.assertEqual(self.post("collect", data, headers={"User-Agent": "Mozilla/5.0 (iPhone) AppleWebKit Safari", "X-Real-IP": "1.2.3.4"}).status_code, 204)
        self.login()
        result = self.client.get("/api/analytics/records").json
        self.assertEqual(result["total"], 1)
        row = result["items"][0]
        self.assertEqual(row["path"], "/reading")
        self.assertEqual(row["referrer"], "https://example.com/path")
        self.assertEqual(row["device"], "mobile")
        self.assertEqual(row["ip"], "127.0.0.1")
        self.assertEqual(self.client.get(f'/api/analytics/records/{row["id"]}').json["event_id"], data["event_id"])
        self.assertEqual(self.client.get("/api/analytics/records/999").status_code, 404)

    def test_filter_pagination_csv_full_result_and_injection(self):
        for i in range(30):
            self.assertEqual(self.post("collect", self.event(kind="download" if i < 27 else "pageview", label="=HYPERLINK(\"bad\")", visitor_id=("v" if i % 2 else "w") * 24)).status_code, 204)
        self.login()
        filtered = self.client.get("/api/analytics/records?kind=download&size=10&page=2").json
        self.assertEqual(filtered["total"], 27)
        self.assertEqual(len(filtered["items"]), 10)
        first = self.client.get("/api/analytics/records?kind=download&size=10&page=1").json
        self.assertFalse(set(r["id"] for r in first["items"]) & set(r["id"] for r in filtered["items"]))
        summary = self.client.get("/api/analytics/summary?kind=download").json
        self.assertEqual(summary["downloads"], 27)
        self.assertEqual(summary["visitors"], 2)
        csv_response = self.client.get("/api/analytics/export?kind=download&page=2&size=10")
        rows = list(csv.reader(io.StringIO(csv_response.data.decode("utf-8-sig"))))
        self.assertEqual(len(rows), 28)
        self.assertTrue(rows[1][7].startswith("'="))
        self.assertEqual(self.client.get("/api/analytics/records?q=%27%20OR%201=1--").json["total"], 0)
        self.assertEqual(self.client.get("/api/analytics/records?q=%25").json["total"], 0)
        self.assertEqual(self.client.get("/api/analytics/records?path=/reading.html").json["total"], 30)
        self.assertEqual(self.client.get("/api/analytics/records?visitor_id=" + "v" * 24).json["total"], 15)

    def test_dates_china_boundaries_validation(self):
        for i in range(3):
            self.post("collect", self.event())
        boundary = int(datetime(2026, 10, 7, tzinfo=timezone(timedelta(hours=8))).timestamp())
        with connect(self.path) as db:
            for i, timestamp in enumerate([boundary - 1, boundary, boundary + 86400], 1):
                db.execute("UPDATE records SET created_at=? WHERE id=?", (timestamp, i))
        self.login()
        result = self.client.get("/api/analytics/records?start=2026-10-07&end=2026-10-07").json
        self.assertEqual(result["total"], 1)
        self.assertEqual(result["items"][0]["time"], "2026-10-07 00:00:00")
        for query in ["start=bad", "start=2026-10-08&end=2026-10-07", "page=0", "size=500", "order=drop", "page=abc"]:
            self.assertEqual(self.client.get("/api/analytics/records?" + query).status_code, 400)

    def test_password_change_revokes_sessions(self):
        csrf = self.login()
        self.assertEqual(self.post("password", {"current": PASSWORD, "password": "short"}, headers={"X-CSRF-Token": csrf}).status_code, 400)
        self.assertEqual(self.post("password", {"current": PASSWORD, "password": "new-test-password-234"}, headers={"X-CSRF-Token": csrf}).status_code, 200)
        self.assertEqual(self.client.get("/api/analytics/me").status_code, 401)
        self.assertEqual(self.post("login", {"username": "admin", "password": PASSWORD}).status_code, 401)
        self.assertEqual(self.post("login", {"username": "admin", "password": "new-test-password-234"}).status_code, 200)

    def test_limits_and_invalid_payload(self):
        for _ in range(10):
            self.assertEqual(self.post("login", {"username": "unknown", "password": "wrong"}).status_code, 401)
        self.assertEqual(self.post("login", {"username": "admin", "password": PASSWORD}).status_code, 429)
        for data in [[], self.event(event_id="bad"), self.event(path="https://bad.test"), self.event(kind="bad"), self.event(kind=[]), self.event(title={})]:
            self.assertEqual(self.post("collect", data).status_code, 400)
        self.assertEqual(self.post("collect", self.event(title="x" * 9000)).status_code, 413)
        self.assertEqual(self.post("collect", self.event(path="/admin/")).status_code, 204)
        with connect(self.path) as db:
            self.assertEqual(db.execute("SELECT count(*) FROM records").fetchone()[0], 0)

    def test_secure_cookie_headers_and_session_expiry(self):
        self.app.config["COOKIE_SECURE"] = True
        response = self.post("login", {"username": "admin", "password": PASSWORD})
        cookie = response.headers["Set-Cookie"]
        for flag in ["Secure", "HttpOnly", "SameSite=Strict", "Path=/api/analytics"]:
            self.assertIn(flag, cookie)
        self.assertEqual(response.headers["Cache-Control"], "no-store")
        self.assertIn("frame-ancestors 'none'", self.client.get("/admin/").headers["Content-Security-Policy"])
        with connect(self.path) as db:
            db.execute("UPDATE sessions SET expires=0")
        self.assertEqual(self.client.get("/api/analytics/me").status_code, 401)

if __name__ == "__main__":
    unittest.main()
