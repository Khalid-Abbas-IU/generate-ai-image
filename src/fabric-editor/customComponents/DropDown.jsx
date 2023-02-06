import React from 'react';
import './DropDown.css'
const DropDown =({onSelectCanvasDim})=>{
    return (
        <div className="canvas-size-wrapper">
            <div className="dropdown">
                <button className="dropbtn">500 x 500</button>
                <div className="dropdown-content">
                    <a onClick={()=>onSelectCanvasDim(1024)}>1024 x 1024</a>
                    <a onClick={()=>onSelectCanvasDim(500)}>500 x 500</a>
                </div>
            </div>
        </div>
    );
}

export default DropDown;