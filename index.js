let number = document.querySelectorAll(".number")
let sign = document.querySelectorAll(".sign");
let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

//button number inputs
number.forEach((number) => number.addEventListener('click', () => displayScreen(number.textContent)));

//Operator button inputs
sign.forEach((sign) => sign.addEventListener('click', () => displayScreen(sign.textContent)));
clear.onclick = () => clearAll()

//Clear button inputs
function clearAll(){
    display.textContent = "";
}
function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

let firstOperand = " ";
let secondOperand = " ";

function displayScreen(num){
    display.textContent += num;
    if(sign.onclick){
        let firstOperand = display;
        console.log(firstOperand);
    }
}