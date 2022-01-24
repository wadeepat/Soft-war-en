
import React,{useState } from 'react';
import axios from 'axios';

function Upload() {
  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file:event.target.files[0],
      filepreview:URL.createObjectURL(event.target.files[0]),
    });

  }

  const [isSucces, setSuccess] = useState(null);

  const submit = async () =>{
    const formdata = new FormData(); 
    formdata.append('avatar', userInfo.file);

    axios.post("http://localhost:8080/imageupload", formdata,{   
            headers: { "Content-Type": "multipart/form-data" } 
    })
    .then(res => { // then print response status
      console.warn(res);
      if(res.data.success === 1){
        setSuccess("Image upload successfully");
      }
      
    })
    //jump to page edit
    window.location.href ="/edit";
    

  }

  return (
    <div className="container mr-60">

      <div className="up-down-edit" align = 'center'>
      {isSucces !== null ? <h4> {isSucces} </h4> :null }
        <div className="form-row" align = 'center'>
          <label  >Select Image </label>
          <input type="file" className="form-control"  name="myImage"  onChange={handleInputChange} />
        </div>
      
      {userInfo.filepreview !== null ? 
        <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage"  />
      : null}

        <div className="upload-pic-area">
          <button type="submit" className="btn-up-save"onClick={()=>submit()} > SAVE </button>
        </div>
      </div>
    </div>
  );
}
export default Upload;
