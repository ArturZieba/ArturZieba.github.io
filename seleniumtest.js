// Remember to clear cache if changes do not seem to take hold

function printToConsole(value)
{
    console.log(value);
}

window.changeColp0 = function(event)
{
    document.getElementById("st-colt0").style.color = event.target.value;
}

console.log("Hello, seleniumtest!");

document.getElementById('st-b0').onclick = () => printToConsole("Button 1");
document.getElementById('st-b1').onclick = () => printToConsole("Button 2");
document.getElementById('st-b2').onclick = () => printToConsole("Button 3");

// Draw on Selenium Test page canvas element (st-canvas0)
let stCanvas0 = document.getElementById("st-canvas0");
let stCanvas0Context = stCanvas0.getContext("2d");
stCanvas0Context.globalAlpha = 0.3;

stCanvas0Context.fillStyle = "red";
stCanvas0Context.fillRect(0, 50, 50, 50);
stCanvas0Context.fillStyle = "green";
stCanvas0Context.fillRect(25, 75, 75, 50);
stCanvas0Context.fillStyle = "blue";
stCanvas0Context.fillRect(25, 25, 25, 50);