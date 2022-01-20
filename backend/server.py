from distutils.log import debug
from importlib import resources
from flask import Flask

import generatePixel
import sys
# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)
# cors = CORS(app, resources = {
#     r"/*":{
#         "origins": "*"
#     }
# })
# Memmber API Route
@app.route("/members")
def members():
    return {"members": ["member1","member2","member3"]}

@app.route('/images/<resolution>/<bit>')
def get_image(resolution,bit):
    generatePixel.resizeImage(resolution,bit)
    # print(resolution, file=sys.stderr)
    return {"image_name": "shark.jpg"}

if __name__ == "__main__":
    app.run(debug=True)

