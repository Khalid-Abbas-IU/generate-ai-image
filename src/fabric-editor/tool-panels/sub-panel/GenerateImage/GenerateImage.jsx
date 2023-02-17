import React, {useContext} from "react";
import './GenerateImage.css'
import EditorButton from "../../../customComponents/CustomButton/EditorButton";
import {CanvasStore} from "../../../../store/store";
import {generateImageId} from "../../../../utils/apiHelpers"
const GenerateImage =()=>{
    let {activeCanvas,setActiveCanvas} = useContext(CanvasStore);
    function b64toBlob(b64Data) {
        const contentType = b64Data.match(/^data:(.*);base64,/)[1];
        const byteCharacters = atob(b64Data.split(',')[1]);
        const byteArrays = [];

        for (let i = 0; i < byteCharacters.length; i++) {
            byteArrays.push(byteCharacters.charCodeAt(i));
        }

        const blob = new Blob([new Uint8Array(byteArrays)], { type: contentType });
        return blob;
    }
    const generateAIImage =()=>{
//         const canvasImg = activeCanvas.toDataURL();
//         // Base64 encoded image data
//         const base64Data = canvasImg
//
// // Create a new Blob object from the base64 data
//         const blob = b64toBlob(base64Data);
//
// // Create a new anchor element with the Blob URL as its href and download attribute
//         const link = document.createElement('a');
//         link.download = 'image.png';
//         link.href = URL.createObjectURL(blob);
//
// // Append the anchor element to the document and trigger a click event
//         document.body.appendChild(link);
//         link.click();
//
// // Remove the anchor element and revoke the Blob URL
//         document.body.removeChild(link);
//         URL.revokeObjectURL(link.href);


        //SEND the post api
        const filePath = "src/generatedImages/image.png";
        const generatedResponce = generateImageId(filePath)


    }

    return (
        <div className="generate-panel-wrapper">
            <div className={""}>
                <h4>Generate</h4>
                <span>Describe your image in a few words</span>
            </div>
            <div className="input-generate-text">
                <input type="text" className="input-text" placeholder="Text Here"/>
                <EditorButton customClass={'generate-btn'} buttText={'Generate'} onClicked = {generateAIImage}/>
            </div>
            <div className="prompt-recommondations">
                <span>Prompt Recommendations</span>
                <div className="prompt-text-item">
                    <p>
                        jasdajsdhadsjkad kjhj jbjbjb jh j bjh bjh bjh bj bkj bkjh b jhb jhb
                    </p>
                </div>
                <div className="prompt-text-item">
                    <p>
                        jasdajsdhadsjkad kjhj jbjbjb jh j bjh bjh bjh bj bkj bkjh b jhb jhb
                    </p>
                </div>
                <div className="prompt-text-item">
                    <p>
                        jasdajsdhadsjkad kjhj jbjbjb jh j bjh bjh bjh bj bkj bkjh b jhb jhb
                    </p>
                </div>
                <div className="prompt-text-item">
                    <p>
                        jasdajsdhadsjkad kjhj jbjbjb jh j bjh bjh bjh bj bkj bkjh b jhb jhb
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GenerateImage;