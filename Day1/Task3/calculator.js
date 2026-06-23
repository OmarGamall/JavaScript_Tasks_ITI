function calculateResult(expression) {
    try {
        // use a regex check first to ensure the string only contains numbers and operators
        if (/[^-+*/.%0-9\s]/.test(expression)) {
            return "Invalid characters in expression";
        }
        // eval() evaluates the string as a mathematical expression and returns the result
        return eval(expression);
    } catch (error) {
        return "Invalid Operation";
    }
}

let userInput = prompt("enter your calculations?");

// Use regex to remove any character that is not a digit, operator, or whitespace
let cleanedInput = userInput.replace(/[^0-9+\-*/.% ]/g, '');

let result = calculateResult(cleanedInput);

alert("the answer is: " + result);