
import axios from "axios";
import {PEXEL_API, PEXEL_API_KEY,baseUrl,generateImgIdApi} from "./variables";
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
};
const generateImageId =async (filePath)=>{
    let payload="";
    axios.post('http://13.250.114.171:14045/gen_engine/v0.1.0/template_images', {
        data: {
            // Your request data goes here
        },
    }, { withCredentials: true, headers }).then(response => {
        // Handle the response
    }).catch(error => {
        // Handle the error
    });
    return payload;
}


const loadImages =async (query="people")=>{
    let payload;
    const config = {
        headers: {
            Authorization: PEXEL_API_KEY
        }
    }
    await axios.get(PEXEL_API + query,config).then((res)=>{
        if(res?.data) {
            payload = [...res.data.photos];
        }
        else payload = [];
    }).catch(error => {
        console.log(error)
        payload = [];
    })
    return payload;
}


export {
    generateImageId,
    loadImages
}