const undo = document.getElementById("undo");
const redo = document.getElementById("redo");

function onUndoClick() {
    if(pathCount){
        drawingHistory.pop();
        pathCount--;
        if(pathCount === 0) {
            c.clearRect(0, 0, canvas.width, canvas.height);
        }
        else {
            c.putImageData(drawingHistory[pathCount-1], 0, 0)
        }
    }
}

function onRedoClick() {

}


undo.addEventListener("click", onUndoClick);
redo.addEventListener("click", onRedoClick);

