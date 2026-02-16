let btn1Min = 1
let btn1Max = 25

let btn2Min = 26
let btn2Max = 50

let btn3Min = 51
let btn3Max = 75

let btn4Min = 76
let btn4Max = 100

let initial = 'Click the buttons below to generate a random number from 1 - 100';

document.getElementById("label").textContent = initial

document.getElementById("btn1").onclick = function(){
    btn1 = Math.random();
    document.getElementById("label").textContent = btn1
    console.log('you tried randomizing 1 - 25')
}
document.getElementById("btn2").onclick = function(){
    btn2 = Math.random();
    document.getElementById("label").textContent = btn2
    console.log('you tried randomizing 26 - 50')
}
document.getElementById("btn3").onclick = function(){
    btn3 = Math.random();
    document.getElementById("label").textContent = btn3
    console.log('you tried randomizing 51 - 75')
}
document.getElementById("btn4").onclick = function getBtn4Random(btn4Min, btn4Max){
    let minCeiled = Math.ceil(btn4Min);
    let maxFloored = Math.floor(btn4Max);
    return btn4 = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled),
    document.getElementById("label").textContent = btn4,
    console.log('you tried randomizing 76 - 100')
}
document.getElementById("reset").onclick = function(){
    initial;
    document.getElementById("label").textContent = initial
    console.log('you have hit the reset button')
}