import React, {useState} from "react";
import './index.css'
import image1 from "../../../../assets/images/room.jpg"
import image2 from "../../../../assets/images/room1.jpg"

const ImagesPanel = ({images}) =>{
    const addImageIntoCanvas=()=>{
        //TODO: you can write code here.
    }
    return(
        <div className="background_panel_wrapper">
            <div className="background_images_wrapper">
                {
                    images?.length && images.map((image,i)=> <div key={i} onClick={addImageIntoCanvas} className="image-item">
                        <img src={image} alt="image"/>
                    </div>)
                }
            </div>
        </div>
    )
}

export default ImagesPanel