let answer;
let currentOperator = null;
let currentNumber = "0";
let previousNumber = null;

function operate(op) {
    if (op === "+") {

    }
}

const operator = document.querySelectorAll(".operator");
operator.forEach((op) => {
    op.addEventListener("click", (e) => {
        // store the operator
        const target = e.currentTarget;
        currentOperator = target.textContent;
        console.log(target.textContent);

        if (previousNumber === null && currentNumber !== "0") {
            previousNumber = currentNumber;
        }
        console.log(`Previous number: ${previousNumber}`);

        const ans = document.querySelector(".text");
        ans.textContent = "0";
    })
})

const displayNum = document.querySelectorAll(".num");
displayNum.forEach((no) => {
    no.addEventListener("click", (e) => {
        // for the number
        const num = e.currentTarget.textContent;
        const ans = document.querySelector(".text")
        // console.log(num);
        if (ans.textContent === "0") {
            ans.textContent = num;
        } else {
            ans.textContent += num;
        }
        currentNumber = ans.textContent;
        console.log(`current number: ${currentNumber}`);
    })
})

// clears the text in the display
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    const ans = document.querySelector(".text")
    ans.textContent = "0";
    currentNumber = "0";
    previousNumber = null;
    currentOperator = null;
})
