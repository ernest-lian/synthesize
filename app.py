import os
from flask import Flask, request, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__, static_folder=os.path.abspath('./client/build'), static_url_path='/')
CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    print(app.static_folder)
    return app.send_static_file('index.html')

@app.route("/testing", methods = ['POST'])
def testing():
    data = request.get_json()
    return data['value']

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

