DROP DATABASE IF EXISTS Horiseon_db;
CREATE DATABASE Horiseon_db;

USE Horiseon_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30),
)

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(50),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
)

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
)