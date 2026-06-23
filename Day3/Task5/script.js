// Day 3 Task 5: Dynamic List Builder

let startButton = document.getElementById("btn-start");
let listElement = document.getElementById("dynamic-list");

startButton.onclick = function() {
    // Clear any previous list items
    listElement.innerHTML = "";
    
    let userInput = "";
    
    // Loop until the user enters "c" or clicks Cancel
    while (true) {
        userInput = prompt("Enter item name (enter 'c' to stop):");
        
        // Break if user presses Cancel or enters "c"/"C"
        if (userInput === null || userInput.trim().toLowerCase() === "c") {
            break;
        }
        
        // Create new list item only if input is not empty
        if (userInput.trim() !== "") {
            let li = document.createElement("li");
            li.innerText = userInput;
            listElement.appendChild(li);
        }
    }
};
