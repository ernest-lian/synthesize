import os
from flask import Flask, request, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='./client/build')
CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/testing", methods = ['POST'])
def testing():
    data = request.get_json()
    return data['value']

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

