let startButton = document.getElementById("btn-start");
let listElement = document.getElementById("dynamic-list");

startButton.onclick = function() {
    listElement.innerHTML = "";
    
    let userInput = "";
    
    while (true) {
        userInput = prompt("Enter item name (enter 'c' to stop):");
        
        if (userInput === null || userInput.trim().toLowerCase() === "c") {
            break;
        }
        
        if (userInput.trim() !== "") {
            let li = document.createElement("li");
            li.innerText = userInput;
            listElement.appendChild(li);
        }
    }
};
