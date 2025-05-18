function createCalculator(displayElement) {
    let currentOperator = null;
    let currentNumber = "0";
    let previousNumber = null;

    function updateDisplay() {
        displayElement.textContent = currentNumber;
    }

    return {
        clear() {
            currentNumber = "0";
            previousNumber = null;
            currentOperator = null;
            updateDisplay();
        },
        appendNumber(number) {
            if (currentNumber === "0") {
                currentNumber = number;
            } else {
                currentNumber += number;
            }
            updateDisplay();
        },
        chooseOperator(operator) {
            if (previousNumber === null && currentNumber !== "0") {
                previousNumber = currentNumber;
            }
            currentOperator = operator;
            currentNumber = "0";
        },
        compute() {
            const number1 = parseFloat(previousNumber);
            const number2 = parseFloat(currentNumber);
            if (isNaN(number1) || isNaN(number2)) return;
            let result;
            switch (currentOperator) {
                case "+":
                    result = number1 + number2;
                    break;
                case "-":
                    result = number1 - number2;
                    break;
                case "*":
                    result = number1 * number2;
                    break;
                case "/":
                    result = number1 / number2;
                    break;
                case "%":
                    result = number1 % number2;
                    break;
                default:
                    break;
            }
            currentNumber = result.toString();
            previousNumber = null;
            currentOperator = null;
            updateDisplay();
        },
        delete() {
            if (currentNumber.length > 1) {
                currentNumber = currentNumber.slice(0, -1);
            } else {
                currentNumber = "0";
            }
            updateDisplay();
        }
    };
}

const display = document.querySelector(".text");
// calculator object
const calculator = createCalculator(display);

document.querySelectorAll(".num").forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.textContent);
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperator(button.textContent);
    });
});

document.querySelector(".equal").addEventListener("click", () => {
    calculator.compute();
});

document.querySelector(".clear").addEventListener("click", () => {
    calculator.clear();
});

document.querySelector(".delete").addEventListener("click", () => {
    calculator.delete();
});