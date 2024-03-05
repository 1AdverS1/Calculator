
function addToDisplay(value) {
    let display = document.getElementById('display');
    display.textContent += value;
}

function deleteLast() {
    let display = document.getElementById('display');
    let currentContent = display.textContent;
    display.textContent = currentContent.slice(0, -1);
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.textContent = '';
}


function calculateResult() {
    let display = document.getElementById('display');
    let contentArray = display.textContent.split(/[+\-*\/]/);
    let operator;

    for (let item of display.textContent) {
        if (item === '+' || item === '-' || item === '*' || item === '/') {
            operator = item;
            break;
        }
    }
    let firstLine = contentArray[0];
    let secondLine = contentArray[1];
    let first = +firstLine;
    let second = +secondLine;

    let result;

    switch (operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        default:
            return;
    }

    display.textContent = result;
}



