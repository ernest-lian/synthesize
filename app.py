import os
from flask import Flask, request, render_template, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

# from spleeter.separator import Separator
# from spleeter.audio.adapter import AudioAdapter

app = Flask(__name__, static_folder=os.path.abspath('./client/build/static'), template_folder='./client/build/static')
CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def hello_world():    
    return render_template("index.html")

@app.route('/remix', methods=['POST'])
def remix():
    # separator = Separator('spleeter:4stems')

    # audio_loader = AudioAdapter.default()
    # sample_rate = 44100
    # waveform, _ = audio_loader.load('./test_drive.mp3', sample_rate=sample_rate)

    # prediction = separator.separate(waveform)
    # # prediction = separator.separate_to_file('./test_drive.mp3', './client/output')

    # vocals = prediction['vocals']

    # drums = prediction['drums']

    # bass = prediction['bass']

    # other = prediction['other']
    
    return { 'response': 200, 'remixName': 'test_drive'}

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', debug=False, port=port)

