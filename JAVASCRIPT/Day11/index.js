//task-1
let numbers = [10, 20, 30, 40, 50];

let result = numbers.map((number) => {
    return number * 2;
});

console.log(result);
//task-2

let a = [10, 15, 20, 25, 30, 35, 40];

let resultA = a.filter((number) => {
    return number % 2 == 0;
})

console.log(resultA);

//task-3
let B = [10, 25, 35, 50, 60];

let resultB = B.find((number) => {
    return number > 30;
})

console.log(resultB);

//task-4
let students = [

    { id: 1, name: "Arun", mark: 75 },

    { id: 2, name: "Priya", mark: 90 },

    { id: 3, name: "Kumar", mark: 65 }

];
let students_result = students.find((number) => {
    return number.id === 2;
})

console.log(students_result);


//task-5

let employees = [{ name: "arun", salary: 25000 },
{ name: "priya", salary: 45000 },
{ name: "kumar", salary: 30000 },
{ name: "ravi", salary: 50000 }];
let filter = employees.filter(emp => emp.salary >= 30000);

console.log(filter);

