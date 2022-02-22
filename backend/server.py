from distutils.log import debug
from importlib import resources
from flask import Flask, send_file, redirect

import generatePixel
import pyrebase
config = {
  "apiKey": "AIzaSyCbZkvyvj1pm6ygYQjRil9usTR61GhNXiU",
  "authDomain": "soft-war-en.firebaseapp.com",
  "projectId": "soft-war-en",
  "storageBucket": "soft-war-en.appspot.com",
  "messagingSenderId": "202141520404",
  "appId": "1:202141520404:web:5afe4e7f91a901fcda8d01",
  "measurementId": "G-BZYGX0EBDD",
  "databaseURL" : ""
}
firebase = pyrebase.initialize_app(config)
storage = firebase.storage()
auth = firebase.auth()
path_on_cloud = "images/mona-1644247147331.png"
email = "softend@gmai.com"
passw = "soft123"
user = auth.sign_in_with_email_and_password(email,passw)
# from flask_cors import CORS

app = Flask(__name__)

# Memmber API Route
@app.route("/members")
def members():
    return {"members": ["member1","member2","member3"]}

@app.route('/images/<resolution>/<bit>/<palette>/<lips>/<eyebrows>/<eyes>')
def get_image(resolution,bit,palette,lips,eyebrows,eyes):
    generatePixel.colorFace(lips,eyebrows,eyes)
    generatePixel.resizeImage(resolution,bit,palette)
    # print(resolution, file=sys.stderr)
    return {"image_name": "shark.jpg"}


@app.route('/downloadpic')
def download_file():
    # pic = "../frontend/src/images/SOFTwarEN.png"
    # pic = storage.child(path_on_cloud).download("SOFTwarEN-1644247147331.png")
    # pic = storage.child(path_on_cloud).get_url(user['idToken'])
    # # return redirect(pic)
    # # return send_from_directory(pic,"name.jpg")

    pic = "../frontend/src/images/SOFTwarEN.png"
    return send_file(pic,as_attachment=True)
    # return redirect(pic)

if __name__ == "__main__":
    app.run(debug=True)

