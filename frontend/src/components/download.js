

const Download = () => {

    return(
        
        <div className="up-down-edit">
            <div className="upload-pic-area">
            <img className="previewimg"  src='http://localhost:5000/downloadpic'/>
            <a href='http://localhost:5000/downloadpic'>
                <button type="button" className="btn-upload" >Download image</button>
            </a>
            </div>

        </div>
    )
    }
    
    export default Download;