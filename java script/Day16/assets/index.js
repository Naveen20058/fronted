const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable");
const message = document.getElementById("message");

// Retrieve employees from localStorage
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Display employees when the page loads
displayEmployees();

// Add employee
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    let name = document.getElementById("empName").value.trim();
    let age = document.getElementById("empAge").value;
    let department = document.getElementById("department").value.trim();
    let salary = document.getElementById("salary").value;

    // Convert age and salary into numbers
    let employeeAge = Number(age);
    let employeeSalary = Number(salary);

    // Validate all fields
    if (
        name === "" ||
        age === "" ||
        department === "" ||
        salary === ""
    ) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (
        !Number.isSafeInteger(employeeAge) ||
        employeeAge <= 0 ||
        !Number.isFinite(employeeSalary) ||
        employeeSalary <= 0
    ) {
        message.textContent =
            "Age must be a positive whole number and salary must be positive.";
        return;
    }

    // Create employee object with unique ID
    let employee = {
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        name: name,
        age: employeeAge,
        department: department,
        salary: employeeSalary
    };

    // Store employee in array
    employees.push(employee);

    // Save complete array in localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Display updated records
    displayEmployees();

    // Clear form
    form.reset();

    message.textContent = "Employee added successfully!";
});

// Display all employees
function displayEmployees() {
    table.innerHTML = "";

    employees.forEach(function (emp) {
        table.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>
                    <button type="button"
                        onclick="deleteEmployee('${emp.id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

// Delete employee
function deleteEmployee(id) {
    employees = employees.filter(function (emp) {
        return emp.id !== id;
    });

    // Update localStorage after deletion
    localStorage.setItem("employees", JSON.stringify(employees));

    // Refresh table
    displayEmployees();

    message.textContent = "Employee deleted successfully!";
}
