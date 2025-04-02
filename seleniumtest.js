function printToConsole(value)
{
    console.log(value);
}

console.log("Hello, seleniumtest!");

document.getElementById('st-b0').onclick = () => printToConsole("Button 1");
document.getElementById('st-b1').onclick = () => printToConsole("Button 2");
document.getElementById('st-b2').onclick = () => printToConsole("Button 3");

let st-canvas0 = document.getElementById("st-canvas0");
let st-canvas0-context = st-canvas0.getContext("2d");
st-canvas0-context.globalAlpha = 0.3;
st-canvas0-context.fillStyle("red");
st-canvas0-context.fillRect(0, 50, 50, 50);
st-canvas0-context.fillStyle("green");
st-canvas0-context.fillRect(25, 75, 75, 50);
st-canvas0-context.fillStyle("blue");
st-canvas0-context.fillRect(25, 25, 25, 50);
