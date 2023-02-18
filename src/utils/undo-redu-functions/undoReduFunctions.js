import {fabric} from "fabric";
import {extraProps} from "../../utils/variables";
fabric.Canvas.prototype._historyNext = function () {
    return JSON.stringify(this.toDatalessJSON(this.extraProps));
}
fabric.Canvas.prototype._historyInit = function (undoStates = [],redoStates = []) {
    this.historyUndo = undoStates;
    this.historyRedo = redoStates;
    this.extraProps = [...extraProps];
    this.historyNextState = {};
    this.historyProcessing = false
}

fabric.Canvas.prototype._historySaveAction = function () {
    if (this.historyProcessing) return;
    const json = this.historyNextState;
    json && this.historyUndo.push(json);
    this.historyNextState = this._historyNext();
    this.fire('history:append', { json: json });
}
fabric.Canvas.prototype.undo = function () {
    if (this.historyProcessing) return;

    if(this.getActiveObject()) {
        this.discardActiveObject();
        this.requestRenderAll();
    }
    // The undo process will render the new states of the objects
    // Therefore, object:added and object:modified events will triggered again
    // To ignore those events, we are setting a flag.
    this.historyProcessing = true;
    const history = this.historyUndo.pop();
    if (history) {
        // Push the current state to the redo history
        this.historyRedo.push(this._historyNext());
        this.historyNextState = history;
        this._loadHistory(history, 'history:undo');
    } else {
        this.historyProcessing = false;
    }
}
fabric.Canvas.prototype.redo = function (callback) {
    if (this.historyProcessing) return;
    if(this.getActiveObject()) {
        this.discardActiveObject();
        this.renderAll();
    }

    // The undo process will render the new states of the objects
    // Therefore, object:added and object:modified events will triggered again
    // To ignore those events, we are setting a flag.
    this.historyProcessing = true;
    const history = this.historyRedo.pop();
    if (history) {
        // Every redo action is actually a new action to the undo history
        this.historyUndo.push(this._historyNext());
        this.historyNextState = history;
        this._loadHistory(history, 'history:redo', callback);
    } else {
        this.historyProcessing = false;
    }
}
fabric.Canvas.prototype._loadHistory = function(history, event) {
    var that = this;
    if (!history) return;
    let canvasObjs = JSON.parse(history).objects;
    if(canvasObjs.length){
        that._objects=[]
        fabric.util.enlivenObjects(canvasObjs, function(objects) {
            that.add(...objects);
            that.requestRenderAll()
            that.fire(event);
            that.historyProcessing = false;
        })
    }else {
        that.historyProcessing = false;
    }
}
fabric.Canvas.prototype.clearHistory = function() {
    this.historyUndo = [];
    this.historyRedo = [];
    this.fire('history:clear');
}
fabric.Canvas.prototype.offHistory = function() {
    this.historyProcessing = true;
}
fabric.Canvas.prototype.onHistory = function() {
    this.historyProcessing = false;
    this._historySaveAction();
}
