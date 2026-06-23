// Day 3 Task 1: Simple Calculator
let display = document.getElementById("display");

// Function to append a character to the display
function press(char) {
    display.value = display.value + char;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to evaluate the expression
function calculate() {
    let expression = display.value;
    if (expression !== "") {
        try {
            // Using standard eval to compute the expression (student level)
            let result = eval(expression);
            display.value = result;
        } catch (error) {
            display.value = "Error";
        }
    }
}
