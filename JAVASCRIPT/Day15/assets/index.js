const form = document.getElementById("calculatorForm");
const result = document.getElementById("result");
const message = document.getElementById("message");

form.addEventListener("submit", calculate);

function calculate(event) {
    event.preventDefault();

    // Get input values
    let first = document.getElementById("num1").value;
    let second = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;

    // Validate empty inputs
    if (first.trim() === "" || second.trim() === "") {
        message.textContent = "Please enter both numbers.";
        result.textContent = "--";
        return;
    }

    // Convert strings into numbers
    let num1 = Number(first);
    let num2 = Number(second);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        message.textContent = "Please enter valid numbers.";
        result.textContent = "--";
        return;
    }

    let answer;

    // Perform calculation
    if (operation === "add") {
        answer = num1 + num2;
    } else if (operation === "subtract") {
        answer = num1 - num2;
    } else if (operation === "multiply") {
        answer = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            message.textContent = "Cannot divide by zero.";
            result.textContent = "--";
            return;
        }

        answer = num1 / num2;
    }

    // Display result
    result.textContent = answer;
    message.textContent = "";
}

// Clear button
document.getElementById("clearBtn").addEventListener("click", function () {
    form.reset();
    result.textContent = "--";
    message.textContent = "";
});