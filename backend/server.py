from distutils.log import debug
from importlib import resources
from flask import Flask, send_file

import generatePixel
# from flask_cors import CORS

app = Flask(__name__)

# Memmber API Route
@app.route("/members")
def members():
    return {"members": ["member1","member2","member3"]}

@app.route('/images/<resolution>/<bit>/<palette>')
def get_image(resolution,bit,palette):
    generatePixel.resizeImage(resolution,bit,palette)
    # print(resolution, file=sys.stderr)
    return {"image_name": "shark.jpg"}


@app.route('/downloadpic')
def download_file():
    pic = "../frontend/src/images/SOFTwarEN.png"
    return send_file(pic,as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)

