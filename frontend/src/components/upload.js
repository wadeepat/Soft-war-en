
import React,{useState } from 'react';
import { Link } from 'react-router-dom';
import { storage } from "../firebase";
const Upload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });

  const handleChange = e => {
    if (e.target.files[0]) {
      if (e.target.files[0].name.match(/\.(jpg|jpeg|png|jfif)$/)) {
        setuserInfo({
          ...userInfo,
          file:e.target.files[0],
          filepreview:URL.createObjectURL(e.target.files[0]),
        });
        setImage(e.target.files[0]);

      }else{
        alert('only file .png .jpg .jpeg .jfif');
      }
    }
    
  };

  const handleUpload = () => {
    var name = "mona-"+Date.now()+".png"
    const uploadTask = storage.ref(`images/${name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  // console.log("image: ", image);

  return (
    <div className="container mr-60">

      <div className="up-down-edit" align = 'center'>
        <div className="form-row" align = 'center'>
          <label  >Select Image </label>
          <input type="file" className="form-control"  name="myImage"  onChange={handleChange} />
        </div>
      {userInfo.filepreview !== null ? 
        
        <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage"  />
      : null}

        <div className="upload-pic-area">
          <Link to ="/edit">
            <button type="submit" className="btn-next"onClick={()=>handleUpload()} > Next </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upload;
