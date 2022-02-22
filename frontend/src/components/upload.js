
import React,{useState } from 'react';
import { Link } from 'react-router-dom';
import { storage } from "../firebase";
import { useHistory } from "react-router-dom";
const Upload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });

  //  const [allVariables, setAllVariables] = useState({
  //     resolution: 64,
  //     bit: 8,
  //     palette: 'NONE',
  //     lips: [0,0,0],
  //     eyebrows: [0,0,0],
  //     eyes: [0,0,0]
  //   });

  //  const resizeImage = async() => {
  //     const res = await fetch(`/images/${allVariables.resolution}/${allVariables.bit}/${allVariables.palette}/${allVariables.lips}/${allVariables.eyebrows}/${allVariables.eyes}`);
  //   }

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

  const handleUpload = async () => {
    // var name = "mona-"+Date.now()+".png"
    var name = "softwaren.png"
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
    // const history = await useHistory();
    // await history.push("/home");
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
