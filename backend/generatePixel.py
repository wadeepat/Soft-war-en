import cv2 
import numpy as np
from PIL import Image
import sys
def resizeImage(resolution,bit,palette):
    resolution = int(resolution)
    bit = int(bit)
    img = Image.open("../public_html/uploads/mona.jpg")

    # change bit depth of image
    if bit != 0:
        img = img.convert("P", palette = Image.ADAPTIVE, colors = bit)

    #change PALETTE
    if(palette == "BGR"):
        # imgCV = np.array(imgChangeBD)
        img.save("../frontend/src/images/newPic.png")
        imgCV = cv2.cvtColor(cv2.imread("../frontend/src/images/newPic.png"), cv2.COLOR_BGR2RGB)
        # imgChangeBD = Image.fromarray(imgCV)
        cv2.imwrite("../frontend/src/images/newPic.png", imgCV)
        img = Image.open("../frontend/src/images/newPic.png")
    elif(palette != "NONE"):
        img = img.convert(palette)
    
    smallImage = img.resize( (resolution,resolution), Image.BILINEAR)
    resultImage = smallImage.resize(img.size, Image.NEAREST)
    resultImage.save("../frontend/src/images/newPic.png")
    # resize image by resolution
    
    

    #save image
    

    # print(resolution, file=sys.stderr)

if __name__ == '__main__':
    resizeImage()

