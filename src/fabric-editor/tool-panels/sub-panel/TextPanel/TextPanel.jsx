import React, {useContext} from "react";
import './TextPanel.css'
import {fabric} from "fabric";
import {CanvasStore} from "../../../../store/store";
import EditorButton from "../../../customComponents/CustomButton/EditorButton";
import { v4 as uuid } from 'uuid';
const TextPanel =()=>{
    let {activeCanvas:canvas,setActiveCanvas} = useContext(CanvasStore);

    const addText =()=>{
        const left = canvas.getWidth()/2,top = canvas.getHeight()/2;
        let id = uuid();
        const text = new fabric.IText("Text Box",{
                left,top,
                fill:"black",
                fontSize:26,
                fontWeight:"700",
                name:'text',
                ref_id:id,
            }
        )
        canvas.add(text).setActiveObject(text).renderAll()
    }
    return (
        <div className="text-panel-wrapper">
            <span className="add-text-span">Add Text</span>
            <div className="input-generate-text">
                <EditorButton customClass={'add-text-btn'} buttText={'Add Text Box'} onClicked={addText}/>
            </div>
        </div>
    );
}

export default TextPanel;