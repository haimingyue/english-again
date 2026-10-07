"""Local full-stack preview; production uses Nginx for the public site."""
from pathlib import Path
from flask import abort, send_from_directory
from app import create_app

app = create_app()
public = Path(__file__).resolve().parent.parent / ".output/public"

@app.get("/")
@app.get("/<path:path>")
def website(path=""):
    for candidate in [path or "index.html", f"{path}/index.html", f"{path}.html"]:
        target = (public / candidate).resolve()
        if target.is_relative_to(public.resolve()) and target.is_file():
            return send_from_directory(public, candidate)
    abort(404)
