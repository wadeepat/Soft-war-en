import react, { useState, useEffect } from 'react';
import imagePath from '../../src/images/newPic.jpg'
const Edit = () => {
    const [imageName, setImageName] = useState("")
    const [data, setData]  = useState([{}])

    const resizeImage = async() => {
        await fetch("/images").then(
          res => res.json()
        ).then(
            data => {
                setImageName(data)
                console.log(imageName)
            }
        )
        
    }
    

    // useEffect(() => {
    //     console.log("test")
    //     fetch("/members").then(
    //       res => res.json()
          
    //     ).then(
    //         data => {
    //             setData(data)
    //             console.log(data)
    //         }
    //     )
    // }, [])

    return(
        <>
        {/* <div className="up-down-edit" id="displayInlineBlock">
            <div className="upload-pic-area" id="toLeft">
            </div>
            
        </div>
        
        <div class="slidecontainer">
                <input type="range" min="1" max="100" class="slider" id="myRange"/>
            </div>
        <div class="slidecontainer">
                <input type="range" min="1" max="100" class="slider" id="myRange"/>
        </div>
            <div class="slidecontainer">
                <input type="range" min="1" max="100" class="slider" id="myRange"/>
        </div> */}
        {/* ----------------------------------------------------------------------------------- */}
        <div className="up-down-edit">
            <div class="editContainer">
                <table width="100%">
                    <tr>
                        <td width="50%" >
                            <div className="editPic">
                                <img src= {imagePath}/>
                            </div>
                        </td>
                        <td width="25%">
                            <tr>RESOLUTION
                                <div class="slidecontainer">
                                    <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                </div>
                            </tr>
                            <tr>EYES
                                <div class="slidecontainer">
                                    <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                </div>
                            </tr>
                            <tr>EYEBROWS
                                <div class="slidecontainer">
                                    <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                </div>
                            </tr>
                            <tr>
                                <p>SIZE
                                    <form>
                                        <select name = "dropdown">
                                            <option value = "25%">25%</option>
                                            <option value = "50%">50%</option>
                                            <option value = "75%">75%</option>
                                            <option value = "100%">100%</option>
                                        </select>
                                    </form>
                                </p>
                            </tr>
                        </td>
                        <td width="25%">
                            <tr>LIPS
                                <div class="slidecontainer">
                                    <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                </div>
                            </tr>
                            <tr>CLOTHES
                                <div class="slidecontainer">
                                    <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                </div>
                            </tr>
                            <tr>HAIR
                                <div class="slidecontainer">
                                    <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                </div>
                            </tr>
                            <tr>
                                <p></p>
                                <button>UNDO</button>
                                <button>REDO</button>
                            </tr>
                        </td>
                    </tr>
                </table>
                
                <button onClick={resizeImage}>SAVE</button>
                
                
                
            </div>
            
        </div>
        
        {/* ----------------------------------------------------------------------------------- */}
        {/* <div className="up-down-edit">
            <table border="1">
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            </table>
        </div> */}
        </>
    )
    
    }
    
    export default Edit;