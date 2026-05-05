// 1. Ask the user for two numbers using prompts
let firstInput = prompt("Enter the first number");
let secondInput = prompt("Enter the second number");

// 2. Input Validation and Cleaning
// Use regex to remove any character that is not a digit, decimal point, or minus sign
let num1 = parseFloat(firstInput.replace(/[^0-9.-]/g, ''));
let num2 = parseFloat(secondInput.replace(/[^0-9.-]/g, ''));

// Handle cases where parsing results in NaN (e.g., if input was empty or only letters)
if (isNaN(num1)) num1 = 0;
if (isNaN(num2)) num2 = 0;

// 3. Perform calculations
let sum = num1 + num2;        
let difference = num1 - num2; 
let product = num1 * num2;  
let quotient;
if (num2 !== 0) {
    quotient = num1 / num2;   
} else {
    quotient = "Undefined (division by zero)";
}  
  

// 4. Output the results to the document text
document.write("<h1>Task 1.1 Results</h1>");
document.write("First Number: " + num1 + "<br>");
document.write("Second Number: " + num2 + "<br><br>");
document.write("Sum: " + sum + "<br>");
document.write("Difference: " + difference + "<br>");
document.write("Product: " + product + "<br>");
document.write("Quotient: " + quotient + "<br>");
document.write("<p>Click Refresh (or Reload) to run this script again</p>");