import React from 'react';
import './index.css'
import ImagesPanel from "./ImagesPanel";
import UploadPanel from "../../sub-panel/UploadPanel/UploadPanel";
import GenerateImage from "../../sub-panel/GenerateImage/GenerateImage";
import TextPanel from "../../sub-panel/TextPanel/TextPanel";
import Shapes from "../../sub-panel/Shapes/Shapes";
const DrawsPanel =({activeKey})=>{
    return (
        <div className="editor-panel-container draw-panel">
            {activeKey === 1 && <UploadPanel/>}
            {activeKey === 2 && <GenerateImage/>}
            {activeKey === 3 && <Shapes/>}
            {activeKey === 4 && <TextPanel/>}
        </div>
    );
}

export default DrawsPanel;