from flask import Flask, render_template, request, jsonify, json

import funcs
app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=['POST'])
def get_lucky_num():
    """Get a lucky number"""

    return json.dumps(funcs.validate_get_lucky_num(request.json))
