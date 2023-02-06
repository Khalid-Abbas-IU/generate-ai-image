import React, {useRef} from 'react';
import './UploadPanel.css'
const UploadPanel =({activeKey})=>{
    const uploadImgInput = useRef();

    const enableUploadHandler = (e) => {
        uploadImgInput.current.click();
    }
    const loadImageIntoCanvas = (file) => {
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = async (e) => {
        //     // addImageToCanvas(reader.result)
        // };
    }
    // const addImageToCanvas = (src,canvas,name="uplaoded-image") => new Promise((resolve, reject)=>{
    //     if (!canvas || !src) return;
    //     const halfCanWidth = canvas.getWidth()/2;
    //     const halfCanHeight = canvas.getHeight()/2;
    //     const LEFT = halfCanWidth;
    //     const TOP = halfCanHeight;
    //     const id = uuid();
    //     fabric.Image.fromURL(src, function (img) {
    //         img.set({
    //             scaleX:width / img.width,
    //             scaleY:height / img.height,
    //             top:TOP,
    //             left:LEFT,
    //             originX: "center",
    //             originY: "center",
    //             custom: {
    //                 subType: name,
    //             },
    //             ref_id: id,
    //             name,
    //             // centeredScaling : true,
    //         });
    //         canvas.add(img);
    //         canvas.setActiveObject(img)
    //         canvas.renderAll();
    //         resolve()
    //     }, {crossOrigin: 'anonymous'})
    // })

    const handleUploadImage = (e) => {
        const file = e.target.files[0]
        loadImageIntoCanvas(file)
    }
    return (
        <div className="background_panel_wrapper">
            <div className="upload-img-popup content-center" onClick={enableUploadHandler}>
                <span className="uploadImgText">UPLOAD IMAGE</span>
                <input ref={uploadImgInput} className="d-none" id="image-upload" type="file" accept=".png, .jpg, .jpeg" onChange={handleUploadImage}/>
            </div>
        </div>
    );
}

export default UploadPanel;