from flask import Flask, request

app = Flask(__name__)


@app.route("/", methods=["POST", "GET"])
def index():
    if request.method == "POST":
        return "Logging in"
        # logging in
    else:
        return "Sending data to front end"
        # sending data to front end
