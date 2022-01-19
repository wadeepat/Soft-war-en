from PIL import Image

def resizeImage():
    resolution = 128
    myImage = Image.open("images/shark.jpg")

    smallImage = myImage.resize( (resolution,resolution), Image.BILINEAR)

    resultImage = smallImage.resize(myImage.size, Image.NEAREST)
    # resultImage = myImage.resize((16,16))

    resultImage.save("images./newPic.jpg")

if __name__ == '__main__':
    resizeImage()