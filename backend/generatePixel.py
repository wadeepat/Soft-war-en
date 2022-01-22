from PIL import Image
import sys
def resizeImage(resolution,bit,palette):
    resolution = int(resolution)
    bit = int(bit)
    img = Image.open("../public_html/uploads/mona.jpg")

    # change bit depth of image
    imgChangeBD = img.convert("P", palette = Image.ADAPTIVE, colors = bit)

    #change PALETTE
    if(palette != 'NONE'):
        imgChangeBD = imgChangeBD.convert(palette)
    # resize image by resolution
    smallImage = imgChangeBD.resize( (resolution,resolution), Image.BILINEAR)
    resultImage = smallImage.resize(img.size, Image.NEAREST)
    

    #save image
    resultImage.save("../frontend/src/images/newPic.png")

    # print(resolution, file=sys.stderr)

if __name__ == '__main__':
    resizeImage()

