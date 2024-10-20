// script.js
function validateLogin() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Basic validation
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    // Check username and password format
    const usernamePattern = /^[A-Za-z]{3}$/; // Username should be 3 letters
    const passwordPattern = /^\d{5}$/; // Password should be 5 digits

    // Validate username and password
    if (usernamePattern.test(username) && passwordPattern.test(password)) {
        // Redirect to aboutus.html if login is successful
        window.location.href = "main.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password format. Please try again.");
        return false; // Prevent form submission
    }
}
