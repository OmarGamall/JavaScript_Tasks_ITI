// Day 3 Task 3: DOM Appending Prompts

function addText() {
    // 1. Ask user to enter any text
    let userText = prompt("Enter some text to add below 'demo':");
    
    if (userText !== null && userText.trim() !== "") {
        // Simple student-level append using innerHTML
        let demoContainer = document.getElementById("demo-container");
        demoContainer.innerHTML += '<p class="user-text">' + userText + '</p>';
    }
    
    // 2. Ask user again to enter a text for header 1
    let userHeader = prompt("Enter header text to add below 'demo2' as H1:");
    
    if (userHeader !== null && userHeader.trim() !== "") {
        // Simple student-level append using innerHTML
        let demo2Container = document.getElementById("demo2-container");
        demo2Container.innerHTML += '<h1 class="user-header">' + userHeader + '</h1>';
    }
}
