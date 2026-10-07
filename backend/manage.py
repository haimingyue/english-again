"""Run with the service environment. Passwords are accepted only on stdin."""
import argparse
import json
import os
import sqlite3
import sys
from datetime import datetime, timezone
from pathlib import Path
from app import init_db, connect, password_hash

parser = argparse.ArgumentParser()
parser.add_argument("command", choices=["init-admin", "reset-password", "backup"])
parser.add_argument("--output")
args = parser.parse_args()
path = os.environ.get("ANALYTICS_DB", str(Path(__file__).resolve().parent.parent / ".data/analytics.sqlite3"))
init_db(path)
db = connect(path)
if args.command in {"init-admin", "reset-password"}:
    data = json.load(sys.stdin)
    username, password = data["username"], data["password"]
    if not isinstance(username, str) or not 1 <= len(username) <= 64 or not isinstance(password, str) or not 12 <= len(password) <= 128:
        raise SystemExit("Invalid username/password")
    existing = db.execute("SELECT 1 FROM admins WHERE username=?", (username,)).fetchone()
    if args.command == "init-admin" and existing:
        raise SystemExit("Admin already exists; refusing to overwrite")
    db.execute("INSERT INTO admins VALUES (?,?) ON CONFLICT(username) DO UPDATE SET password_hash=excluded.password_hash", (username, password_hash(password)))
    db.execute("DELETE FROM sessions WHERE username=?", (username,))
    db.commit()
    print("Admin credentials updated; sessions revoked.")
else:
    if not args.output:
        raise SystemExit("--output directory required")
    directory = Path(args.output)
    directory.mkdir(parents=True, exist_ok=True)
    destination = directory / datetime.now(timezone.utc).strftime("analytics-%Y%m%d-%H%M%S.sqlite3")
    with sqlite3.connect(destination) as backup:
        db.backup(backup)
        if backup.execute("PRAGMA integrity_check").fetchone()[0] != "ok":
            raise SystemExit("Backup integrity check failed")
    os.chmod(destination, 0o600)
    # Rotate backups only; never remove visit records from the live database.
    for old in sorted(directory.glob("analytics-*.sqlite3"), reverse=True)[14:]:
        old.unlink()
    print("Verified backup:", destination)
db.close()
