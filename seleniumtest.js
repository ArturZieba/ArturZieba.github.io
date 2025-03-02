function printToConsole(value)
{
    console.log(value)
}

console.log("Hello, seleniumtest!")

document.getElementById('st-b0').onclick = () => printToConsole("Button 1");
document.getElementById('st-b1').onclick = () => printToConsole("Button 2");
document.getElementById('st-b2').onclick = () => printToConsole("Button 3");