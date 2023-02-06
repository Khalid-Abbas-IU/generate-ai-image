import React, {useEffect} from 'react';
import './index.css'

const EditorButton =({onClicked,buttText,customClass})=>{
    return (
        <div className={`fab-button center-content fab-btn-text ${customClass}`} onClick={onClicked}>
            {buttText}
        </div>
    );
}
export default EditorButton;