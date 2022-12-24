let number = document.querySelectorAll(".number")
let sign = document.querySelectorAll(".sign");
let display = document.querySelector(".display");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let prevEquation = document.querySelector(".displayEquation")

//button number inputs
number.forEach((number) => number.addEventListener('click', () => displayScreen(number.textContent)));

//Operator button inputs
sign.forEach((sign) => sign.addEventListener('click', () => operate(sign.textContent)));
clear.onclick = () => clearAll();
equal.onclick = () => display.textContent = calculate(operator,previousOperand, currentOperand);

//Storage for First and Second Operand;
let currentOperand = " ";
let previousOperand = " ";
let operator = " ";

//Display Screen and Collecting Second Operand
function displayScreen(num){
    currentOperand += num;
        display.textContent = currentOperand;
}

//Making Operative buttons functional and Collecting First Operand
function operate(op){
    operator = op
    if(operator == "+" || operator == "-" || operator == "*" || operator == "/"){
        previousOperand = currentOperand;
        currentOperand = " ";
            }
            }

// Doing Math when Equal button pressed
function calculate(operator,a,b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case "*":
            return currentOperand = a * b; 
        case "/":
            return currentOperand = a / b;
        case "+":
            return currentOperand = a + b;
        case "-":
            return currentOperand = a - b;
             }
}

//Clear button inputs
function clearAll(){
    previousOperand = "";
    currentOperand = "";
    display.textContent = "";
}