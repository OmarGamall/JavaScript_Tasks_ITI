let btnCompare = document.getElementById("btn-compare");
let inputStr1 = document.getElementById("str1");
let inputStr2 = document.getElementById("str2");
let textareaResult = document.getElementById("result");

btnCompare.onclick = function() {
    let str1 = inputStr1.value;
    let str2 = inputStr2.value;
    
    if (str1 === str2) {
        textareaResult.value = "The two strings are equal";
    } else if (str1 > str2) {
        textareaResult.value = "The first string is greater";
    } else {
        textareaResult.value = "The second string is greater";
    }
};
