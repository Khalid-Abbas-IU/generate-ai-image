import React from 'react';
import './TextPanel.css'
import EditorButton from "../../../customComponents/CustomButton/EditorButton";
const TextPanel =()=>{
    return (
        <div className="text-panel-wrapper">
            <span className="add-text-span">Add Text</span>
            <div className="input-generate-text">
                <EditorButton customClass={'add-text-btn'} buttText={'Add Text Box'}/>
            </div>
        </div>
    );
}

export default TextPanel;