import React, {useState} from 'react';
import './Shapes.css'
import rect from "../../../../assets/svgs/black-large-square-svgrepo-com.svg";
import blueCircle from "../../../../assets/svgs/blue-circle.svg";
import circle from "../../../../assets/svgs/blue-circle-svgrepo-com.svg";
import sd from "../../../../assets/svgs/1354707850.svg";
import image2 from "../../../../assets/images/room1.jpg";
import ImagesPanel from "../../left-panel/tab-panels/ImagesPanel";
const apiImages = [rect,
    blueCircle,
    circle,
    sd
]

const Shapes =()=>{
    const addImageIntoCanvas=()=>{
        //TODO: you can write code here.
    }
    return (
        <div className="shapes-panel-wrapper">
            <div className="shapes-heading">
                <h5>Elements</h5>
                <span>Search Elements</span>
            </div>
            <div className="input-generate-text">
                <input type="text" className="input-text" placeholder="Search ..."/>
            </div>
            <ImagesPanel images={apiImages}/>
        </div>
    );
}

export default Shapes;