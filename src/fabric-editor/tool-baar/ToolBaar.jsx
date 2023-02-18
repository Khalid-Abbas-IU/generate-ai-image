import React, {useContext} from 'react';
import './index.css'
import Button from 'react-bootstrap/Button';
import deleteImg from "../../assets/images/ButtonsImages/delete.png";
import {CanvasStore} from "../../store/store";
const ToolBaar =()=>{
    let {activeCanvas} = useContext(CanvasStore);

    const deleteSelected = () =>{
        let activeObject = activeCanvas?.getActiveObject();
        if (!activeObject) return;
        if(activeObject.type === 'activeSelection'){
            for(let i =0; i <activeObject._objects.length; i++){
                activeCanvas.remove(activeObject._objects[i])
            }
        }
        else{
            activeCanvas.remove(activeObject);
        }
        activeCanvas.discardActiveObject().renderAll();
    }
    return (
        <div className={`toolbaar-container`}>
            <div className="delete-tool" onClick={deleteSelected}>
                <img src={deleteImg} height={25} width={25}/>
            </div>
        </div>
    );
}

export default ToolBaar;