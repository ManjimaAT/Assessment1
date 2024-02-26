document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submitButton");
    const loginForm = document.getElementById("loginForm");
    usernameInput.addEventListener("input", validateInputs);
    passwordInput.addEventListener("input", validateInputs);

    function validateInputs() {
        if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.setAttribute("disabled", true);
        }
    }
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "profile.html";
    });
});






