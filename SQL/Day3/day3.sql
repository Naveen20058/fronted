create database day3;
use day3;
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    department VARCHAR(50),
    joining_date DATE,
    city VARCHAR(50)
);

ALTER TABLE employees
RENAME COLUMN name TO employee_name;
ALTER TABLE employees
MODIFY salary DECIMAL(12,2);
ALTER TABLE employees
ADD email VARCHAR(100);