from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend is alive. Frontend connected successfully."

app.run(host="0.0.0.0", port=5000)
