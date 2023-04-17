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

})

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
    db.query("select * from department;", function(err,data) {
        if(err) throw err
        console.table(data)
        displayMenu()
    })
}

function getRoles() {
    db.query("select * from role;", function(err,data) {
        if(err) throw err
        console.table(data)
        displayMenu()
    })
}

function getEmployees() {
    db.query("select * from employee;", function(err,data) {
        if(err) throw err
        console.table(data)
        displayMenu()
    })
}