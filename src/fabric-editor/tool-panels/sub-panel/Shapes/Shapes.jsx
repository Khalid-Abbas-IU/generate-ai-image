import React, {useState} from 'react';
import './Shapes.css'
import image1 from "../../../../assets/images/room.jpg";
import image2 from "../../../../assets/images/room1.jpg";
import ImagesPanel from "../../left-panel/tab-panels/ImagesPanel";
const apiImages = [image1,image2,image1,image2,image1,image2,image1,image1,image2,image1,image2,image1,image1,image2,image1,image2,image1,image1,image2,image1,image2,image1]

const Shapes =()=>{
    const [apiImages] = useState([image1,image2,image1,image2,image1,image2,image1,image1,image2,image1,image2,image1,image1,image2,image1,image2,image1,image1,image2,image1,image2,image1])
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