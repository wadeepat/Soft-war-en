from PIL import Image
import sys
def resizeImage(resolution,bit):
    resolution = int(resolution)
    myImage = Image.open("../public_html/uploads/mona.jpg")

    smallImage = myImage.resize( (resolution,resolution), Image.BILINEAR)

    resultImage = smallImage.resize(myImage.size, Image.NEAREST)
    # resultImage = myImage.resize((16,16))

    resultImage.save("../frontend/src/images/newPic.jpg")

    # print(resolution, file=sys.stderr)

if __name__ == '__main__':
    resizeImage()

