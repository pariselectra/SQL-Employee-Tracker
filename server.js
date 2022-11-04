const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql')

var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "registrar_db"
    })

connection.connect(function(err){
        if(err)throw(err);
        console.log('Employee Directory')

        runRegistrar();
        })
    
function runRegistrar () {
    inquirer
    .prompt (
        {
            type: "list",
            name: "master",
            message: "Select an Action",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add a Department",
                "Add an Employee Role",
                "Add an Employee",
                "Update an Employee Role",
                "Exit"
            ]
        }
    )

    .then(function ({selection}) {
        switch (selection) {

            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Add an Employee Role":
                addEmployeeRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an Employee Role":
                updateEmployeeRole();
                break;
            case "Exit":
                exit();
                break;
        }
    }
    )
}

function viewAllDepartments() {
    console.log("Viewing All Departments");
    
    connection.query(`SELECT * FROM departments`, function (err, res) {
        if (err) throw err;
    
        console.table(res);
        console.log("All Departments Viewed");
    

    runRegistrar();
});
}