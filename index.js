let number = document.querySelectorAll(".number")
let sign = document.querySelectorAll(".sign");
let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

//button number inputs
number.forEach((number) => number.addEventListener('click', () => displayScreen(number.textContent)));

//Operator button inputs
sign.forEach((sign) => sign.addEventListener('click', () => operate(sign.textContent)));
clear.onclick = () => clearAll();

//Clear button inputs
function clearAll(){
    display.textContent = "";
}

//Storage for First and Second Operand;
let currentOperand = " ";
let previousOperand = " ";

//Display Screen and Collecting Second Operand
function displayScreen(num){
    currentOperand += num;
        display.textContent = currentOperand;
}

//Making Operative buttons functional and Collecting First Operand
function operate(operator){
    displayScreen("")
    if(operator == "+" || operator == "-" || operator == "*" || operator == "/"){
        previousOperand = currentOperand;
        currentOperand = " "
        console.log(previousOperand);
            }
     switch(operator){
        case "*":
            return previousOperand * currentOperand;
        case "/":
            return previousOperand / currentOperand;
        case "+":
            return previousOperand + currentOperand;
        case "-":
            return previousOperand - currentOperand;
     }
    }