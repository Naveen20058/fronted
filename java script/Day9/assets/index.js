//global scope
let company = "ABC Technologies";

function showEmployee() {
    let employee = "Arun";

    console.log(company);
    console.log(employee);
}

showEmployee();
//block scope
if (true) {

    let age = 25;
    const city = "Chennai";

    // Inside the if block
    console.log(age);
    console.log(city);
}

// Outside the if block
console.log(age);
console.log(city);