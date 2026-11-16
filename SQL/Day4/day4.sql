create database day4;
use day4;

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    salary DECIMAL(10,2),
    department VARCHAR(51),
    joining_date DATE,
    city VARCHAR(40)
);
INSERT INTO employees VALUES
(1, 'Arun', 'HR', 25000, 'Madurai'),
(2, 'Kumar', 'IT', 30000, 'Salem'),
(3, 'Ravi', 'HR', 35000, 'Trichy'),
(4, 'Priya', 'IT', 40000, 'Coimbatore'),
(5, 'Divya', 'Sales', 28000, 'Madurai'),
(6, 'Vijay', 'HR', 32000, 'Salem'),
(7, 'Ajay', 'Sales', 45000, 'Trichy'),
(8, 'Meena', 'IT', 26000, 'Erode');

SELECT *
FROM employees
WHERE department = 'IT'
AND salary > 30000;