import React, {useState,useContext} from 'react';
import './Shapes.css'
import rect from "../../../../assets/svgs/black-large-square-svgrepo-com.svg";
import blueCircle from "../../../../assets/svgs/blue-circle.svg";
import circle from "../../../../assets/svgs/blue-circle-svgrepo-com.svg";
import sd from "../../../../assets/svgs/1354707850.svg";
import image2 from "../../../../assets/images/room1.jpg";
import ImagesPanel from "../../left-panel/tab-panels/ImagesPanel";
import {fabric} from "fabric";
import { v4 as uuid } from 'uuid';
import {CanvasStore} from "../../../../store/store";
const apiImages = [rect,
    blueCircle,
    circle,
    sd
]

const Shapes =()=>{
    let {activeCanvas:canvas,setActiveCanvas} = useContext(CanvasStore);

    const addShapeIntoCanvas=(image)=>{
        //TODO: you can write code here.
        addSVGIconByURL(image,canvas)
    }
    const addSVGIconByURL = (src,canvas,customProps) => {
        if (!canvas || !src) return;
        const refId = uuid();
        fabric.loadSVGFromURL(src, (objects, options) => {
            const obj = fabric.util.groupSVGElements(objects, options);
            let width = 200, height = width;
            const left = canvas.getWidth()/2;
            const top = canvas.getHeight()/2;
            obj.set({
                ref_id : refId,
                name : "SVG-Image",
                originX: "center",
                originY: "center",
                custom:{
                    subType: 'SVG',
                    label: 'SVG-Image',
                    id: refId,
                    type: "Icon",
                    url: src,
                },
                left,
                top,
                centeredScaling : true,
            });
            if (obj?._objects?.length) {
                for (let i = 0; i < obj._objects.length; i++) {
                    obj._objects[i].set({
                        ref_id: refId,
                        name: "SVG-Path",
                        // originX: "center",
                        // originY: "center",
                        custom: {
                            subType: 'SVG',
                            label: 'SVG-Path',
                            id: refId,
                            type: "Icon",
                            url: obj._objects[i].d,
                        },
                    })
                }
            }
            if (customProps) {
                obj.set({
                    scaleX:(customProps.width * customProps.perPixelInch.x) / obj.width,
                    scaleY:(customProps.height * customProps.perPixelInch.y)  / obj.height,
                })
            } else obj.scaleToHeight(width)
            // add color paths svgColorArray
            let svgColorArray = getIconColors(obj, 'fill'),
                svgStrokeArray = getIconColors(obj, 'stroke');
            obj.set({
                custom: {
                    ...obj.custom,
                    svgColorArray: svgColorArray,
                    svgStrokeArray: svgStrokeArray,
                }
            })
            canvas.add(obj).setActiveObject(obj).renderAll();
            canvas.renderAll();

        });
    }
    const getIconColors = (activeObject, preset = 'fill',colorsObj) => {
        let svgColorArray = [];
        if (activeObject.type === 'path') {
            if (activeObject[preset])
                svgColorArray.push({id: uuid(), value: activeObject[preset]})
        }
        if (activeObject.type === 'group') {
            let objects = activeObject._objects;
            svgColorArray = [];
            objects.forEach((object, index) => {
                if (object[preset])
                    svgColorArray.push({id: index, value: object[preset]})
            })
        }
        return svgColorArray;
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
            <ImagesPanel images={apiImages} addImageIntoCanvas={addShapeIntoCanvas}/>
        </div>
    );
}

export default Shapes;