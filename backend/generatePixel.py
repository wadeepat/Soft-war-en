import cv2 
import numpy as np
from PIL import Image
import sys
import dlib 

def createBox(img,points1,points2=[],scale=5,masked=False,cropped=True):

    if masked:
        mask = np.zeros_like(img)
        mask = cv2.fillPoly(mask,[points1],(255,255,255))
        if  points2 != []:
            mask = cv2.fillPoly(mask,[points2],(255,255,255))
        img = cv2.bitwise_and(img,mask)

    if cropped:
        bbox = cv2.boundingRect(points1)
        x,y,w,h = bbox
        imgCrop = img[y:y+h,x:x+w]
        imgCrop = cv2.resize(imgCrop,(0,0),None,scale,scale)
        return imgCrop
    else:
        return mask

def colorFace(colorlips,coloreyebrows,coloreyes):

    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
    
    img = cv2.imread("../public_html/uploads/w1.jpg")
    imgOriginal = img.copy()
    imgGray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    faces = detector(imgGray)

    BGRlips = colorlips.split(",")
    BGReyebrows = coloreyebrows.split(",")
    BGReyes = coloreyes.split(",")

    for face in faces:
        x1,y1 = face.left(),face.top()
        x2,y2 = face.right(),face.bottom()
        # imgOriginal = cv2.rectangle(img,(x1,y1),(x2,y2),(0,255,0),2)
        landmarks = predictor(imgGray,face)
        myPoints = []
        for n in range(68):
            x = landmarks.part(n).x
            y = landmarks.part(n).y
            myPoints.append([x,y])
            # cv2.circle(imgOriginal,(x,y),2,(50,50,255),cv2.FILLED)
            # cv2.putText(imgOriginal,str(n),(x,y-5),cv2.FONT_HERSHEY_COMPLEX_SMALL,0.5,(0,0,255),1)
        myPoints = np.array(myPoints)

        imgLips = createBox(img,myPoints[48:61],masked=True,cropped=False)
        imgColorLips = np.zeros_like(imgLips)
        imgColorLips[:] = BGRlips
        imgColorLips = cv2.bitwise_and(imgLips,imgColorLips)
        imgColorLips = cv2.GaussianBlur(imgColorLips,(7,7),10)
        imgColorLips = cv2.addWeighted(imgOriginal,1,imgColorLips,0.4,0)

        imgEyebrow = createBox(img,myPoints[17:22],myPoints[22:27],masked=True,cropped=False)
        imgColorEyebrow = np.zeros_like(imgEyebrow)
        imgColorEyebrow[:] = BGReyebrows
        imgColorEyebrow = cv2.bitwise_and(imgEyebrow,imgColorEyebrow)
        imgColorEyebrow = cv2.GaussianBlur(imgColorEyebrow,(7,7),10)
        imgColorEyebrow = cv2.addWeighted(imgColorLips,1,imgColorEyebrow,0.4,0)

        imgEyes = createBox(img,myPoints[36:42],myPoints[42:48],masked=True,cropped=False)
        imgColorEyes = np.zeros_like(imgEyes)
        imgColorEyes[:] = BGReyes
        imgColorEyes = cv2.bitwise_and(imgEyes,imgColorEyes)
        imgColorEyes = cv2.GaussianBlur(imgColorEyes,(7,7),10)
        imgColorEyes = cv2.addWeighted(imgColorEyebrow,1,imgColorEyes,0.4,0)

    cv2.imwrite("../frontend/src/images/faceColored.png",imgColorEyes)

def resizeImage(resolution,bit,palette):
    resolution = int(resolution)
    bit = int(bit)
    img = Image.open("../frontend/src/images/faceColored.png")

    # change bit depth of image
    if bit != 0:
        img = img.convert("P", palette = Image.ADAPTIVE, colors = bit)

    #change PALETTE
    if(palette == "BGR"):
        # imgCV = np.array(imgChangeBD)
        img.save("../frontend/src/images/SOFTwarEN.png")
        imgCV = cv2.cvtColor(cv2.imread("../frontend/src/images/SOFTwarEN.png"), cv2.COLOR_BGR2RGB)
        # imgChangeBD = Image.fromarray(imgCV)
        cv2.imwrite("../frontend/src/images/SOFTwarEN.png", imgCV)
        img = Image.open("../frontend/src/images/SOFTwarEN.png")
    elif(palette != "NONE"):
        img = img.convert(palette)
    
    smallImage = img.resize( (resolution,resolution), Image.BILINEAR)
    resultImage = smallImage.resize(img.size, Image.NEAREST)
    resultImage.save("../frontend/src/images/SOFTwarEN.png")
    # resize image by resolution
    
    

    # save image
    

    # print(resolution, file=sys.stderr)

if __name__ == '__main__':
    resizeImage()

