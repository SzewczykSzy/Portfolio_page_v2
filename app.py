from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
import os


app = Flask(__name__, static_folder='../my-portfolio/build', static_url_path='/')
CORS(app)


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/data')
def get_data():
    return jsonify(message="Hello from Flask!")


if __name__ == "__main__":
    app.run(debug=True)