create database day5;
use day5;
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    city VARCHAR(50),
    course VARCHAR(50),
    fees INT,
    marks INT
);
INSERT INTO students VALUES
(1, 'Arun', 20, 'Chennai', 'Python', 25000, 85),
(2, 'Kumar', 22, 'Madurai', 'Java', 30000, 75),
(3, 'Ravi', 19, 'Chennai', 'Python', 20000, 90),
(4, 'Priya', 21, 'Coimbatore', 'Java', 30000, 95),
(5, 'Divya', 23, 'Madurai', 'React', 35000, 80),
(6, 'Ajay', 18, 'Chennai', 'React', 25000, 70),
(7, 'Vijay', 24, 'Salem', 'Python', 40000, 88),
(8, 'Sneha', 20, 'Madurai', 'Java', 28000, 92),
(9, 'Manoj', 25, 'Chennai', 'React', 32000, 65),
(10, 'Kavi', 19, 'Salem', 'Python', 22000, 78);
SELECT *
FROM students
WHERE age BETWEEN 18 AND 25
AND city IN ('Chennai', 'Madurai');