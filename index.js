const mysql = require('mysql2');
const inquirer = require("inquirer");
const fs = require('fs');
require('console.table')
require("dotenv").config()
const db = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: process.env.password,
    database: "Horiseon_db",
},
console.log('Connected to Horiseon Database.'))

db.connect(function(err){
if(err) throw err;
console.log("Emp track")
displayMenu()
})

function displayMenu(){
    inquirer.prompt([
        {
            type:"list",
            name:"options",
            message:"Please Select an Option",
            choices:["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role","Exit App"]
        }
    ]).then(response => {
        switch(response.options) {
            case "View All Departments":
                getDepartments()
                break;
            case "View All Roles":
                getRoles()
                break;
            case "View All Employees":
                getEmployees()
                break;
            case "Add Department":
                addDepartment()
                break;
            case "Add Role":
                addRole()
                break;
            case "Add Employee":
                addEmployee()
                break;
            case "Update Employee Role":
                updateRole()
                break;
            default:
                db.end()
                process.exit(0)
        }
    })
}

function getDepartments() {
    db.query("SELECT * from department;", function(err,data) {
        if(err) throw err
        console.table(data)
        displayMenu()
    })
}

function getRoles() {
    db.query("SELECT * from role;", function(err,data) {
        if(err) throw err
        console.table(data)
        displayMenu()
    })
}

function getEmployees() {
    db.query("SELECT * from employee;", function(err, data) {
        if(err) throw err
        console.table(data)
        displayMenu()
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            name: 'newDepartment',
            type: 'input',
            message: `What is the new department's name?`
        }
    ]).then((response) => {
        db.query(`INSERT INTO department SET ?`,
        {
            name: response.newDepartment,
        },
        (err, res) => {
            if (err) throw err;
            console.log(`\n ${response.newDepartment} successfully added to database! \n`);
            displayMenu();
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            name: 'newRole',
            type: 'input',
            message: `What is the new role title?`
        },
        {
            name: 'newSalary',
            type: 'input',
            message: `what is the new role's salary?`
        },
        {
            name: 'newRoleDepartment',
            type: 'input',
            message: `What department id does this role belong to?`
        }
    ]).then((response) => {
        db.query(`INSERT INTO role SET ?`,
        {
            title: response.newRole,
            salary: response.newSalary,
            department_id: response.newRoleDepartment,
        },
        (err, res) => {
            if (err) throw err;
            console.log(`\n ${response.newRole} successfully added to database! \n`);
            displayMenu();
        })
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: `What is the new employee's first name?`
        },
        {
            name: 'lastName',
            type: 'input',
            message: `What is the new employee's last name?`
        },
        {
            name: 'employeeRole',
            type: 'input',
            message: `What is the new employee's role id?`
        },
        {
            name: 'managerId',
            type: 'input',
            message: `What is the manager id for this new employee?`
        }
    ]).then((response) => {
        db.query(`INSERT INTO employee SET ?`,
        {
           first_name: response.firstName,
           last_name: response.lastName,
           role_id: response.employeeRole,
           manager_id: response.managerId,
        },
        (err, res) => {
            if (err) throw err;
            console.log(`\n ${response.firstName} has been successfully added to database! \n`);
            displayMenu();
        })
    })
}

function updateRole() {
    inquirer.prompt([
        {
            name: `chooseEmployee`,
            type: `list`,
            message: `Choose an employee`,
            choices: [`SELECT * FROM employee`],
        },
        {
            name: `newRole`,
            type: `list`,
            message: `Choose a new role`,
            choices: [`SELECT * FROM role`]
        },
    ]).then((response) => {
        db.query(`UPDATE employee SET employee.role_id ? WHERE employee.id ?`,
        {

        },
        )
    })
}