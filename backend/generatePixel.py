from PIL import Image

def resizeImage():
    resolution = 64
    myImage = Image.open("../public_html/uploads/1642244711846-258836425_926269641604849_4976627869693203958_n.jpg")

    smallImage = myImage.resize( (resolution,resolution), Image.BILINEAR)

    resultImage = smallImage.resize(myImage.size, Image.NEAREST)
    # resultImage = myImage.resize((16,16))

    resultImage.save("../frontend/src/images/newPic.jpg")

if __name__ == '__main__':
    resizeImage()

