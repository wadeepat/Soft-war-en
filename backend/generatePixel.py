from PIL import Image
import sys
def resizeImage(resolution,bit):
    resolution = int(resolution)
    bit = int(bit)
    img = Image.open("../public_html/uploads/mona.jpg")

    # change bit depth of image
    imgChangeBD = img.convert("P", palette = Image.ADAPTIVE, colors = bit)

    smallImage = imgChangeBD.resize( (resolution,resolution), Image.BILINEAR)

    resultImage = smallImage.resize(img.size, Image.NEAREST)
    # resultImage = myImage.resize((16,16))

    resultImage.save("../frontend/src/images/newPic.png")

    # print(resolution, file=sys.stderr)

if __name__ == '__main__':
    resizeImage()

