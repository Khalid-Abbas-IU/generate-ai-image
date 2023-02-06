import React, {useState} from 'react';
import './index.css'
import Draws from "./tab-panels/DrawsPanel";
import LeftTabMenu from "./left-tab-menu/LeftTabMenu";

const LeftPanel = ()=>{
    const [activeKey,setActiveKey] = useState(1)
    return (
        <div className="editor-left-side">
            <LeftTabMenu activeKey={activeKey} updateActivePanel={setActiveKey}/>
            <Draws activeKey={activeKey}/>
        </div>
    );
}

export default LeftPanel;