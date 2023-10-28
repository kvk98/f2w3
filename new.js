const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

CanvasRenderingContext2D
const c = canvas.getContext("2d");

// c.beginPath();
// c.moveTo(100, 100);
// c.lineTo(200, 200);
// c.strokeStyle = "red";
// c.lineWidth = 5;
// // c.globalAlpha = 0.5;
// c.stroke();
// c.closePath();
// console.log("vamshi");

const drawingHistory = [];
letpathCount = 0;

function drawLine(p1, p2, a, b) {
    c.beginPath();
    c.moveTo(p1.x, p1.y);
    c.lineTo(p2.x, p2.y);
    c.lineWidth = a;
    c.strokeStyle = b;
    c.stroke();
    c.closePath();
}

// drawLine({x : 100, y: 200}, {x: 500, y: 700}, 5, "red");

// function onMouseDown(event) {
//     let {clientX, clientY} = event;
//     c.beginPath();
//     c.moveTo(clientX, clientY);
//     c.lineWidth = 3;
//     c.strokeStyle = "blue";
// }

// function onMouseUp(event) {
//     let {clientX, clientY} = event;
//     c.lineTo(clientX, clientY);
//     c.stroke();
//     c.closePath();
// }

// function onMouseMove(event) {
//     console.log(event.clientX, event.clientY);
// }

// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", onMouseUp);
// canvas.addEventListener("mousemove", onMouseMove);

let previousPosition = null;
function onMouseDown (event) {
    previousPosition = [event.clientX, event.clientY];
    // console.log("mousedown");
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
}




function onMouseMove(event) {
    currentPosition = [event.clientX, event.clientY];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.lineWidth = 3;
    c.strokeStyle = "red";
    c.stroke();
    previousPosition = currentPosition;
}

function onMouseUp(event) {
    console.log("mouseup");

    canvas.removeEventListener("mousemove", onMouseMove);
}