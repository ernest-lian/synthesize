import os
from flask import Flask, request, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__, static_folder=os.path.abspath('./client/build'))
CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def index():
    print(app.static_folder)
    return send_from_directory(app.static_folder,'index.html')

@app.route("/testing", methods = ['POST'])
def testing():
    data = request.get_json()
    return data['value']

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

