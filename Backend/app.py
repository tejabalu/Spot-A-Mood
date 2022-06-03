from flask import Flask, request
from engine import FrontEndPost

app = Flask(__name__)


@app.route("/", methods=["POST", "GET"])
def index():
    if request.method == "POST":
        # logging in
        return "Logging in"
    else:
        # sending data to front end
        FrontEndPost()
