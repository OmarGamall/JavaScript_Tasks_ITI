let fruits = ["Banana", "Orange", "Apple", "Mango"];

let tryButton = document.getElementById("btn-try");
let resultBox = document.getElementById("result");

tryButton.onclick = function() {
    let resultString = fruits.join(" and ");
    
    resultBox.innerText = resultString;
    
    resultBox.classList.add("show");
};
