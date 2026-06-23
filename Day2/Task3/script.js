let btnNow = document.getElementById("btn-now");
let btnYesterday = document.getElementById("btn-yesterday");
let btnTenYears = document.getElementById("btn-tenyears");
let btnOneWeek = document.getElementById("btn-oneweek");

btnNow.onclick = function() {
    let currentDate = new Date();
    alert("Current Date & Time: " + currentDate.toLocaleString());
};

btnYesterday.onclick = function() {
    let yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    alert("Yesterday: " + yesterdayDate.toLocaleString());
};

btnTenYears.onclick = function() {
    let tenYearsAgoDate = new Date();
    tenYearsAgoDate.setFullYear(tenYearsAgoDate.getFullYear() - 10);
    alert("Ten Years Ago: " + tenYearsAgoDate.toLocaleString());
};

btnOneWeek.onclick = function() {
    let oneWeekFromNowDate = new Date();
    oneWeekFromNowDate.setDate(oneWeekFromNowDate.getDate() + 7);
    alert("In One Week: " + oneWeekFromNowDate.toLocaleString());
};
