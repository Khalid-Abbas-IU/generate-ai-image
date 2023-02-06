import React from 'react';
import './index.css'
import generateImage from "../../../../assets/images/generate-image.png"
import shapesPng from "../../../../assets/images/shapes.png"
import TextImg from '../../../../assets/images/ButtonsImages/text.png';
import uploadImage from '../../../../assets/images/ButtonsImages/upload.png';
const LeftTabMenu =({activeKey,updateActivePanel})=>{
    const activePanel = (key) =>{
        updateActivePanel(key)
    }
    return (
        <div className="editor-left-menu">
            <div className={`fab-icon-button ${activeKey === 1 ? 'selected_panel' : ''}`} onClick={()=>activePanel(1)}>
                <img src={uploadImage} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${activeKey === 2 ? 'selected_panel' : ''}`} onClick={()=>activePanel(2)}>
                <img src={generateImage} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${activeKey === 3 ? 'selected_panel' : ''}`} onClick={()=>activePanel(3)}>
                <img src={shapesPng} height={40} width={40}/>
            </div>
            <div className={`fab-icon-button ${activeKey === 4 ? 'selected_panel' : ''}`} onClick={()=>activePanel(4)}>
                <img src={TextImg} height={40} width={40}/>
            </div>
        </div>
    );
}

export default LeftTabMenu;