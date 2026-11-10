create table students(
student_id INT PRIMARY KEY,
student_name VARCHAR(100) NOT NULL,
age INT CHECK(age>=18),
email VARCHAR(100) UNIQUE,
city VARCHAR(50) DEFAULT'chennai',
admission_date DATE);
