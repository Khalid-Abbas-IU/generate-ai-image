import React, {useContext, useEffect, useRef, useState} from "react";
import './index.css'
import "../../../utils/fabricOverrids/index"
import {fabric} from "fabric"
import LeftPanel from '../left-panel/LeftPanel';
import DropDown from "../../customComponents/DropDown";
import { v4 as uuid } from 'uuid';
import {CanvasStore} from "../../../store/store";
import image1 from "../../../assets/images/burger1.png"
let canvas,canvasDims={};
const extraProps = [
    'name',
    'custom',
    'activeSide',
    'selectable',
    'draggable', 'clip_id', 'evented', 'crossOrigin',
    'absolutePositioned',
    'globalCompositeOperation',
    'lockMovementY' ,'lockMovementX' ,'lockScalingX', 'lockScalingY','editable',
    'ref_id','text','fontSize','fontFamily','fontStyle','oldFontSize','oldWidth','oldHeight'
];
let activeAction = ""
const CanvasEditor =()=>{
    let {activeCanvas,setActiveCanvas} = useContext(CanvasStore);

    const [activeCanvasSize,setActiveCanvasSize] = useState(500)
    const canvasWrapper = useRef();
    useEffect(()=> {
        initCanvas();
    }, []);
    const initCanvas = ()=> {
        let width = activeCanvasSize ,height = activeCanvasSize;
        canvas = window.canvas = new fabric.Canvas(`gen-img-canvas`, {
            width, height,
            selection: false,
            // backgroundColor:"gray"
        });
        setActiveCanvas(canvas)
        addImageToCanvas(image1,canvas)
        subscribeEvents(canvas);
    }
    function subscribeEvents(canvas) {
        canvas.on({
            'object:added': added,
            'object:scaling': objectScaling,
            'object:scaled': objectScaled,
            'object:moving': objectMoving,
            'object:removed': added,
        });
    }
    const added = (e) => {
        let obj = e.target;
        if (!obj) return;
    };
    const objectScaling = (e) => {};
    const objectScaled = (e) => {
    };
    const objectMoving = (e) => {
        const actObj = e.target;
        if (!actObj) return;
    };
    const onSelectCanvasDim =(size)=>{
        setActiveCanvasSize(size)
        updateCanvasDimension(size)
    }
    function updateCanvasDimension(size){
        if (!canvas) return;

        // canvas.setZoom(size / canvas.getWidth())
        canvas.setDimensions({
            width : size,
            height : size,
        })
        canvas.calcOffset()
        canvas.renderAll();
    }
    const addImageToCanvas = (src,canvas,name="uploaded-image") => {
        if (!canvas || !src) return;
        const halfCanWidth = canvas.getWidth()/2;
        const halfCanHeight = canvas.getHeight()/2;
        const width = canvas.getWidth();
        const height = canvas.getHeight();
        const LEFT = halfCanWidth;
        const TOP = halfCanHeight;
        const id = uuid();
        console.log("src",src)
        fabric.Image.fromURL(src, function (img) {
            console.log("img",img)
            img.set({
                scaleX:width / img.width,
                scaleY:height / img.height,
                top:TOP,
                left:LEFT,
                originX: "center",
                originY: "center",
                custom: {
                    subType: name,
                },
                ref_id: id,
                name,
                // centeredScaling : true,
            });
            canvas.add(img);
            canvas.setActiveObject(img)
            canvas.renderAll();
        }, {crossOrigin: 'anonymous'})
    }

    return (
        <div className="fabric-editor-container">
            <div className="editor-main-wrapper" ref={canvasWrapper}>
                <LeftPanel />
                <div className="canvas-editor-wrapper">
                    <DropDown activeCanvasSize = {activeCanvasSize} onSelectCanvasDim={onSelectCanvasDim}/>
                    <div className={`fabric-editor-pro center-content-column`}>
                        <canvas id="gen-img-canvas" style={{border:"2px solid #d1d1d1"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CanvasEditor;
