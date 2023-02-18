import React, {useRef,useState,useContext} from 'react';
import './UploadPanel.css'
import {fabric} from "fabric";
import { v4 as uuid } from 'uuid';
import {CanvasStore} from "../../../../store/store";
import {burgerImg} from "../../../../utils/variables"
const UploadPanel =({activeKey})=>{
    let {activeCanvas:canvas,setActiveCanvas} = useContext(CanvasStore);

    const [uploadedImages, setUploadedImages] = useState([{id:uuid(),url:burgerImg}])
    const uploadImgInput = useRef();

    const enableUploadHandler = (e) => {
        uploadImgInput.current.click();
    }
    const loadImageIntoCanvas = (file) => new Promise((resolve,reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async (e) => {
            resolve(reader.result)
        };
    })
    const addImageToCanvas = (src,canvas,name="uplaoded-image") => new Promise((resolve, reject)=>{
        if (!canvas || !src) return;
        const halfCanWidth = canvas.getWidth()/2;
        const halfCanHeight = canvas.getHeight()/2;
        const LEFT = halfCanWidth;
        const TOP = halfCanHeight;
        const width = halfCanWidth;
        const id = uuid();
        fabric.Image.fromURL(src, function (img) {
            img.set({
                top:TOP - halfCanHeight/2,
                left:LEFT - halfCanWidth/2,
                ref_id: id,
                name,
                // centeredScaling : true,
            });
            img.scaleToWidth(width)
            canvas.add(img);
            canvas.setActiveObject(img)
            canvas.renderAll();
            resolve()
        }, {crossOrigin: 'anonymous'})
    })

    const handleUploadImage = async (e) => {
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const imgBase64 = await loadImageIntoCanvas(file)
            setUploadedImages(imgs => [{id:uuid(),url:imgBase64},...imgs])

        }

    }
    const addUploadImage=(imgSrc)=>{
        addImageToCanvas(imgSrc,canvas)
    }
    return (
        <div className="upload_panel_wrapper">
            <div className="upload-img-popup content-center" onClick={enableUploadHandler}>
                <span className="uploadImgText">UPLOAD IMAGE</span>
                <input ref={uploadImgInput} className="d-none" id="image-upload" type="file" accept=".png, .jpg, .jpeg" multiple={true} onChange={handleUploadImage}/>
            </div>
            <div className="uploaded-images-wrapper">
                <span>Uploaded Images</span>
                <div className="uploaded-images-list">
                    {uploadedImages.map((image)=>{
                        return <div className="uploaded-image-item">
                            <img src={image.url} alt="image" onClick={()=>addUploadImage(image.url)}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default UploadPanel;