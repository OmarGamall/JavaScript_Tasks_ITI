let fruits = ["Banana", "Orange", "Apple", "Mango"];

let modifyButton = document.getElementById("btn-modify");
let resultBox = document.getElementById("result");
let resultLabel = document.getElementById("result-label");

modifyButton.onclick = function() {
    let appleIndex = fruits.indexOf("Apple");
    
    if (appleIndex === -1) {
        resultLabel.style.display = "block";
        resultBox.innerText = "Apple is already deleted\n" + fruits.join(",");
        resultBox.classList.add("show");
    } else {
        fruits.splice(appleIndex, 1, "Lemon", "Kiwi");
        
        let output = fruits.join(",");
        
        resultLabel.style.display = "block";
        resultBox.innerText = output;
        resultBox.classList.add("show");
    }
};

