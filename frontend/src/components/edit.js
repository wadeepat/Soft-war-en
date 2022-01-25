import react, { useState, useEffect } from 'react';
import imagePath from '../images/SOFTwarEN.png'
import { View } from 'react-native';

const Edit = () => {
    // const imagePath = '../../src/images/SOFTwarEN.jpg'
    const [imageName, setImageName] = useState("")
    const [data, setData]  = useState([{}])

    const [allVariables, setAllVariables] = useState({
        resolution: 64,
        bit: 8,
        palette: 'NONE'
    });

    const resizeImage = async() => {
        const res = await fetch(`/images/${allVariables.resolution}/${allVariables.bit}/${allVariables.palette}`);
        const data = await res.json();
        setImageName(data)
    }

    function disableBit(){
        var bt = document.getElementById("in_bit")
        if(bt.disabled){
            setAllVariables({ 
                ...allVariables,
                bit: 8 
            })
            bt.disabled = false;
        }else{
            setAllVariables({ 
                ...allVariables,
                bit: 0 
            })
            bt.disabled = true;
        }

        
       
    }

    // useEffect(() => {
    //     resizeImage();
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
                                <img src= {imagePath} width= "75%" className="edit-img"/>
                            </div>
                        </td>
                        <td width="25%">
                            <tr>RESOLUTION: {allVariables.resolution}
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <button>-</button>
                                        <div class="slidecontainer">
                                            <input type="range" min="1" max="200" class="slider" id="myRange" value={allVariables.resolution}
                                                onChange={ e => setAllVariables({ 
                                                    ...allVariables, 
                                                    resolution: e.target.value 
                                                })}
                                            />
                                        </div>
                                    <button>+</button>
                                </View>
                            </tr>
                            <tr>Bit: {allVariables.bit}
                                <button class = "btn btn-primary mx-2"
                                    onClick={disableBit}
                                >
                                    Disable
                                </button>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <button>-</button>
                                        <div class="slidecontainer">
                                            <input type="range" min="2" max="24" class="slider" id="in_bit" value={allVariables.bit}
                                                onChange={ e => setAllVariables({ 
                                                    ...allVariables,
                                                    bit: e.target.value 
                                                })}
                                            />
                                        </div>
                                    <button>+</button>
                                </View>
                            </tr>
                            <tr>EYES 
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <button>-</button>
                                        <div class="slidecontainer">
                                            <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                        </div>
                                    <button>+</button>
                                </View>
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
                            <tr>
                                <p>PALETTE
                                    <form>
                                        <select name = "dropdown" 
                                            onChange={ e => setAllVariables({ 
                                                ...allVariables,
                                                palette: e.target.value 
                                            })}
                                        >
                                            <option value = "NONE">NONE</option>
                                            <option value = "L">GrayScale</option>
                                            <option value = "1">Black and White</option>
                                            <option value = "BGR">BGR</option>
                                        </select>
                                    </form>
                                </p>
                            </tr>
                        </td>
                        <td width="25%">
                            <tr>LIPS
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <button>-</button>
                                        <div class="slidecontainer">
                                            <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                        </div>
                                    <button>+</button>
                                </View>
                            </tr>
                            <tr>CLOTHES
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <button>-</button>
                                        <div class="slidecontainer">
                                            <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                        </div>
                                    <button>+</button>
                                </View>
                            </tr>
                            <tr>HAIR
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <button>-</button>
                                        <div class="slidecontainer">
                                            <input type="range" min="1" max="100" class="slider" id="myRange"/>
                                        </div>
                                    <button>+</button>
                                </View>
                            </tr>
                            <tr>
                                <p></p>
                                <button className="btn-undo">UNDO</button>
                                <button className="btn-redo">REDO</button>
                            </tr>
                        </td>
                    </tr>
                </table>
                
            </div>
            <div className="btn-set-3" >
                <View style={{flexDirection:'row', alignItems:'center'}}>
                        <div className="edit-previous-btn">
                            <button type="submit" className="btn-previous" > Previous </button>
                        </div>
                        <div>
                            <button className="btn-up-save" onClick={resizeImage}>Save</button>
                        </div>
                        <div>
                            <button type="submit" className="btn-next" > Next </button>
                        </div>
                </View>
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