let firstInput = prompt("Enter first integer:");
let secondInput = prompt("Enter second integer:");

// Use regex to remove any character that is not a digit, decimal point, or minus sign
let num1 = parseInt(firstInput.replace(/[^0-9.-]/g, ''));
let num2 = parseInt(secondInput.replace(/[^0-9.-]/g, ''));

// Handle cases where parsing results in NaN
if (isNaN(num1)) num1 = 0;
if (isNaN(num2)) num2 = 0;

if (num1 > num2) {
    alert(num1 + " is larger than" + num2);
} 
else if (num2 > num1) {
    alert(num2 + " is larger than" + num1);
} 
else {
    document.write("<h1>Task 1.2 Results</h1>");
    document.write("These numbers are equal<br>");
    document.write("<p>Click Refresh (or Reload) to run this script again</p>");
}