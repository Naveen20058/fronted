const heading = document.getElementById("heading");
const button = document.getElementById("btn");

heading.style.color = "black";

button.addEventListener("click", function () {
    heading.style.color = "red";
    heading.style.fontSize = "30px";
});

