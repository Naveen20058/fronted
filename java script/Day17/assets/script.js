document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("msg").innerText =
        "Registration Successful";
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email &&
        user.password === password) {

        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";

    } else {
        document.getElementById("msg").innerText =
            "Invalid Email or Password";
    }
});