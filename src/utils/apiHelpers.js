
import axios from "axios";
import {PEXEL_API, PEXEL_API_KEY} from "./variables";

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
    loadImages
}