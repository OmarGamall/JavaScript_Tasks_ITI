// Task 2: Array Modification using Splice
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Get DOM elements
let modifyButton = document.getElementById("btn-modify");
let resultBox = document.getElementById("result");
let resultLabel = document.getElementById("result-label");

modifyButton.onclick = function() {
    // Find the index of "Apple" in the array
    let appleIndex = fruits.indexOf("Apple");
    
    // Check if "Apple" exists
    if (appleIndex === -1) {
        // Display validation message and the array below it
        resultLabel.style.display = "block";
        resultBox.innerText = "Apple is already deleted\n" + fruits.join(",");
        resultBox.classList.add("show");
    } else {
        // Delete 'Apple' and insert 'Lemon', 'Kiwi'
        fruits.splice(appleIndex, 1, "Lemon", "Kiwi");
        
        // Join the elements with comma
        let output = fruits.join(",");
        
        // Display result
        resultLabel.style.display = "block";
        resultBox.innerText = output;
        resultBox.classList.add("show");
    }
};

