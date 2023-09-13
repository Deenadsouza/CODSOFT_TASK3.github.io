const inputDisplay = document.getElementById("inputDisplay");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    
    if (value.match(/[0-9]/)) {
      currentInput += value;
      inputDisplay.value = currentInput;
    } else if (value.match(/[\+\-\*\/]/)) {
      if (operator !== "") {
        inputDisplay.value = operate(firstOperand, currentInput, operator);
        firstOperand = inputDisplay.value;
        currentInput = "";
      } else {
        firstOperand = currentInput;
        currentInput = "";
      }
      operator = value;
    } else if (value === "=") {
      if (operator !== "") {
        inputDisplay.value = operate(firstOperand, currentInput, operator);
        firstOperand = "";
        currentInput = inputDisplay.value;
        operator = "";
      }
    } else if (value === "C") {
      clear();
    }
  });
});

function operate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "";
  }
}

function clear() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  secondOperand = "";
  inputDisplay.value = "";
}
