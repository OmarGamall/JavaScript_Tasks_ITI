// 1. Function to calculate mathematical operations as requested in Note 2
function calculateResult(expression) {
    try {
        // eval() evaluates the string as a mathematical expression (e.g., "5+5" becomes 10)
        // We use a regex check first to ensure the string only contains numbers and operators
        if (/[^-+*/.%0-9\s]/.test(expression)) {
            return "Invalid characters in expression";
        }
        
        return eval(expression);
    } catch (error) {
        return "Invalid Operation";
    }
}

// 2. Use prompt message to enter the calculation
let userInput = prompt("enter your calculations?");

// 3. Process the input
// Use regex to remove any character that is not a digit, operator, or whitespace
let cleanedInput = userInput.replace(/[^0-9+\-*/.% ]/g, '');

let result = calculateResult(cleanedInput);

// 4. Display the output using alert function (Note 3 & 4)
alert("the answer is: " + result);