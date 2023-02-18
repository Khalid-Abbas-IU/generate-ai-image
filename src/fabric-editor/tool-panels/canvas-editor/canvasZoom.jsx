import React from "react";
import undo from "../../../assets/images/undo-100.png";
import redo from "../../../assets/images/redo-100.png";
import "./HeaderTools.css"

const CanvasZoom = ({onUndo,onRedo}) => {
    return(
        <div className="zoom_wrapper">
            <span>
                <img src={undo} height={15} width={15} onClick={onUndo}/>
            </span>
            <span>
                <img src={redo} height={15} width={15} onClick={onRedo}/>
            </span>
        </div>
    )
}
export default CanvasZoom