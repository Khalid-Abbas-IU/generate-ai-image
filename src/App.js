import './App.css';
import React from "react";
import HeaderComponent from "./fabric-editor/Header/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import CanvasEditor from "./fabric-editor/tool-panels/canvas-editor/CanvasEditor";

const App =()=>{
  return (
      <div className="App">
        <HeaderComponent/>
        <CanvasEditor/>
      </div>
  );
}

export default App;
