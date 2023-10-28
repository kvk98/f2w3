
// let back = document.getElementById("vamshi");
// back.innerHTML= "vamhi";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

function drawLine(p1, p2, color = "red", thickness= 2){
    c.beginPath();
    c.strokeStyle = color;
    c.lineWidth = thickness;
    c.moveTo(p1.x, p1.y);
    c.lineTo(p2.x, p2.y);
    c.stroke();
    c.closePath();
}

let drawingColor = "red";
let previousPosition = null;

function onMouseDown(event) {
    previousPosition = [event.clientX, event.clientY];
    c.lineWidth = 2;
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onMouseMove (event) {
    let currentPosition = [event.clientX, event.clientY];

    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition;
}

function onMouseUp (event) {
    canvas.removeEventListener("mousemove", onMouseMove);
}
