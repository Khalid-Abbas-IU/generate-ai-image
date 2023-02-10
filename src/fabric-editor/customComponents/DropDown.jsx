import React from 'react';
import './DropDown.css'
const DropDown =({activeCanvasSize,onSelectCanvasDim})=>{
    return (
        <div className="canvas-size-wrapper">
            <div className="dropdown">
                <button className="dropbtn">{activeCanvasSize} + {activeCanvasSize}</button>
                <div className="dropdown-content">
                    <a onClick={()=>onSelectCanvasDim(1024)}>1024 x 1024</a>
                    <a onClick={()=>onSelectCanvasDim(512)}>512 x 512</a>
                </div>
            </div>
        </div>
    );
}

export default DropDown;