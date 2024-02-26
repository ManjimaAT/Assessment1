var userData = JSON.parse(localStorage.getItem("userData"));
document.getElementById("firstName").textContent = userData.firstName;
document.getElementById("lastName").textContent = userData.lastName;
document.getElementById("dob").textContent = userData.dob;
document.getElementById("gender").textContent = userData.gender;
