// Task 3: Date/Time Calculations & Alerts

// Get references to buttons
let btnNow = document.getElementById("btn-now");
let btnYesterday = document.getElementById("btn-yesterday");
let btnTenYears = document.getElementById("btn-tenyears");
let btnOneWeek = document.getElementById("btn-oneweek");

// 1. Now Button - Alerts current date and time
btnNow.onclick = function() {
    let currentDate = new Date();
    alert("Current Date & Time: " + currentDate.toLocaleString());
};

// 2. Yesterday Button - Alerts date and time 24 hours ago
btnYesterday.onclick = function() {
    let yesterdayDate = new Date();
    // Decrease date by 1 day
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    alert("Yesterday: " + yesterdayDate.toLocaleString());
};

// 3. Ten Years Ago Button - Alerts date and time 10 years ago
btnTenYears.onclick = function() {
    let tenYearsAgoDate = new Date();
    // Decrease full year by 10 years
    tenYearsAgoDate.setFullYear(tenYearsAgoDate.getFullYear() - 10);
    alert("Ten Years Ago: " + tenYearsAgoDate.toLocaleString());
};

// 4. In One Week Button - Alerts date and time one week from today
btnOneWeek.onclick = function() {
    let oneWeekFromNowDate = new Date();
    // Increase date by 7 days
    oneWeekFromNowDate.setDate(oneWeekFromNowDate.getDate() + 7);
    alert("In One Week: " + oneWeekFromNowDate.toLocaleString());
};
