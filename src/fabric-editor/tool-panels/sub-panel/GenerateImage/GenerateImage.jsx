import React from 'react';
import './GenerateImage.css'
import EditorButton from "../../../customComponents/CustomButton/EditorButton";
const GenerateImage =()=>{
    return (
        <div className="generate-panel-wrapper">
            <div className={""}>
                <h4>Generate</h4>
                <span>Describe your image in a few words</span>
            </div>
            <div className="input-generate-text">
                <input type="text" className="input-text" placeholder="Text Here"/>
                <EditorButton customClass={'generate-btn'} buttText={'Generate'}/>
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