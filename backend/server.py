from distutils.log import debug
from importlib import resources
from flask import Flask

import generatePixel
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

@app.route('/images')
def get_image():
    generatePixel.resizeImage()
    return {"image_name": "shark.jpg"}

if __name__ == "__main__":
    app.run(debug=True)

