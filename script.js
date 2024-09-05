let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
    if (currentNumber === '' && number === 0) return;
    currentNumber += number;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentNumber;
}

function operate(op) {
    if (currentNumber === '') return;
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    if (previousNumber === '' || currentNumber === '' || operator === null) return;

    let result;
    let prev = parseFloat(previousNumber);
    let curr = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operator = null;
    previousNumber = '';
    updateDisplay();
}