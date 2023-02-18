import React, {useContext} from 'react';
import './header.css'
import projectLogo from "../../assets/images/project-logo.png"
import EditorButton from "../customComponents/CustomButton/EditorButton";
import CanvasZoom from "../tool-panels/canvas-editor/canvasZoom";
import deleteImg from "../../assets/images/delete-white.png";
import {CanvasStore} from "../../store/store";
const HeaderComponent =()=>{
    let {activeCanvas} = useContext(CanvasStore);
    const onUndo=()=>{
        activeCanvas.undo();
    }
    const onRedo=()=>{
        activeCanvas.undo();
    }
    
    return (
        <div className={"separate-section-baar"}>
            <div className="right-section">
                <span>PROJECT LOGO</span>
                {/*<img src={projectLogo} alt="project-logo" height={40}/>*/}
            </div>
            <div className="left-section">
                <div className="header-tools">
                    <CanvasZoom onUndo = {onUndo} onRedo={onRedo}/>
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