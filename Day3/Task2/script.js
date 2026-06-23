function validateForm(event) {
    event.preventDefault();

    let nameVal = document.getElementById("name").value.trim();
    let ageVal = document.getElementById("age").value.trim();
    let emailVal = document.getElementById("email").value.trim();

    document.getElementById("name-error").innerText = "";
    document.getElementById("age-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("success-msg").innerText = "";

    let isValid = true;

    if (nameVal === "") {
        document.getElementById("name-error").innerText = "Name is required.";
        isValid = false;
    } else if (nameVal.length > 10) {
        document.getElementById("name-error").innerText = "Name cannot exceed 10 characters.";
        isValid = false;
    }

    let ageNum = Number(ageVal);
    if (ageVal === "") {
        document.getElementById("age-error").innerText = "Age is required.";
        isValid = false;
    } else if (isNaN(ageNum) || ageNum < 1 || ageNum > 100) {
        document.getElementById("age-error").innerText = "Age must be a number between 1 and 100.";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === "") {
        document.getElementById("email-error").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(emailVal)) {
        document.getElementById("email-error").innerText = "Invalid email format.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success-msg").innerText = "Form submitted successfully!";
    }

    return isValid;
}
