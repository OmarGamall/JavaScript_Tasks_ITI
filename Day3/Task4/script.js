// Day 3 Task 4: Scrollable Advertising Window

let openAdButton = document.getElementById("btn-open-ad");

openAdButton.onclick = function() {
    // Open ad.html in a popup window with specific features
    // width=450, height=380, and scrollbars enabled
    window.open("ad.html", "AdWindow", "width=450,height=400,scrollbars=yes,resizable=yes");
};
