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
let firstOperand = " "
let secondOperand = " ";

function displayScreen(num){
    display.textContent += num;
}

function operate(operator, firstOperand,secondOperand){

     switch(operator){
        case "*":
            return firstOperand * secondOperand;
        
        case "/":
            return firstOperand / secondOperand;
        
        case "+":
            return firstOperand + secondOperand;
        case "-":
            return firstOperand - secondOperand;
     }
    }