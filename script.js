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
    btn1 = Math.floor(Math.random() * btn1Max) + btn1Min
    document.getElementById("label").textContent = btn1
    console.log('you tried randomizing 1 - 25')
}
document.getElementById("btn2").onclick = function(){
    let btn2 = Math.floor(Math.random() * (btn2Max - btn2Min + 1)) + btn2Min;
    document.getElementById("label").textContent = btn2
    console.log('you tried randomizing 26 - 50')
}
document.getElementById("btn3").onclick = function(){
    btn3 = Math.floor(Math.random() * (btn3Max - btn3Min + 1)) + btn3Min;
    document.getElementById("label").textContent = btn3
    console.log('you tried randomizing 51 - 75')
}
document.getElementById("btn4").onclick = function(){
    btn4 = Math.floor(Math.random() * (btn4Max - btn4Min + 1)) + btn4Min;
    document.getElementById("label").textContent = btn4
    console.log('you tried randomizing 76 - 100')
}
document.getElementById("reset").onclick = function(){
    initial;
    document.getElementById("label").textContent = initial
    console.log('you have hit the reset button')
}