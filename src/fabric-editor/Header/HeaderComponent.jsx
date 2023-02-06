import React from 'react';
import './header.css'
import projectLogo from "../../assets/images/project-logo.png"
import EditorButton from "../customComponents/CustomButton/EditorButton";
import CanvasZoom from "../tool-panels/canvas-editor/canvasZoom";
import deleteImg from "../../assets/images/delete-white.png";
const HeaderComponent =()=>{
    return (
        <div className={"separate-section-baar"}>
            <div className="right-section">
                <span>PROJECT LOGO</span>
                {/*<img src={projectLogo} alt="project-logo" height={40}/>*/}
            </div>
            <div className="left-section">
                <div className="header-tools">
                    <CanvasZoom/>
                    {/*<div className="delete-icon">*/}
                    {/*    <img src={deleteImg} height={30} width={30}/>*/}
                    {/*</div>*/}
                </div>
                <EditorButton customClass={'done-btn'} buttText={'SAVE'}/>
            </div>
        </div>
    );
}

export default HeaderComponent;