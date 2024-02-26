document.getElementById("registrationForm").addEventListener("input", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var submitButton = document.getElementById("submitButton");
    var passwordError = document.getElementById("passwordError");
    var usernameError = document.getElementById("usernameError");
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (username.trim() === "") {
        submitButton.disabled = true;
        usernameError.textContent = "Username is required";
    } else {
        submitButton.disabled = false;
        usernameError.textContent = "";
    }

    if (password.trim() === "" || confirmPassword.trim() === "") {
        passwordError.textContent = "";
    } else if (!passwordRegex.test(password)) {
        submitButton.disabled = true;
        passwordError.textContent = "Password must contain atleast one lowercase letter, one uppercase letter, one number, and be atleast 8 characters long";
    } else if (password !== confirmPassword) {
        submitButton.disabled = true;
        passwordError.textContent = "Passwords does not match";
    } else {
        passwordError.textContent = "";
    }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var formData = {
        username: document.getElementById("username").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        dob: document.getElementById("dob").value,
        gender: document.querySelector('input[name="gender"]:checked').value
    };
    localStorage.setItem("userData", JSON.stringify(formData));
    window.location.href = "profile.html";
});

