
//import for frontend testing
import imagePath from '../images/SOFTwarEN.png'
import { Link } from 'react-router-dom'
const Download = () => {

    return(
        
        <div className="up-down-edit">
            <div className="upload-pic-area">
            <img className="previewimg-down"  src='http://localhost:5000/downloadpic'/>
            <a href='http://localhost:5000/downloadpic'>
                <button type="button" className="btn-download" >Download image</button>
            </a>
            <div className="div-btn-pre-down">
                <Link to = "/edit">
                    <button type="submit" className="btn-previous" > Previous </button>
                </Link>
            </div>
            </div>
        </div>
    )
    }
    
    export default Download;
    /*'http://localhost:5000/downloadpic'*/