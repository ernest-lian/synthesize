import os
from flask import Flask, request, render_template, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__, static_folder=os.path.abspath('./client/build/static'), template_folder='./client/build/static')
CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

from spleeter.separator import Separator
from spleeter.audio.adapter import AudioAdapter

@app.route("/")
def hello_world():
    return "<p>Hello, World2!</p>"

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', debug=False, port=port)

