let display = document.getElementById("display");

function press(char) {
    display.value = display.value + char;
}

function clearDisplay() {
    display.value = "";
}

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
