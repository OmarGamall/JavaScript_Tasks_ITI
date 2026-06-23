function addText() {
    let userText = prompt("Enter some text to add below 'demo':");
    
    if (userText !== null && userText.trim() !== "") {
        let demoContainer = document.getElementById("demo-container");
        demoContainer.innerHTML += '<p class="user-text">' + userText + '</p>';
    }
    
    let userHeader = prompt("Enter header text to add below 'demo2' as H1:");
    
    if (userHeader !== null && userHeader.trim() !== "") {
        let demo2Container = document.getElementById("demo2-container");
        demo2Container.innerHTML += '<h1 class="user-header">' + userHeader + '</h1>';
    }
}
