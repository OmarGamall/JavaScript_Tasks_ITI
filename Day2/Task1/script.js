// Task 1: Array Display Joining
// Declaring the array with let as requested
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Get references to HTML elements
let tryButton = document.getElementById("btn-try");
let resultBox = document.getElementById("result");

// Add click event listener to the button
tryButton.onclick = function() {
    // Join array elements with ' and '
    let resultString = fruits.join(" and ");
    
    // Display the result in the result box
    resultBox.innerText = resultString;
    
    // Add visual class to fade-in/animate the result
    resultBox.classList.add("show");
};
