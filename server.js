// https://github.com/EdenKhaos/12-mysql-employee-tracker

const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql')
require("console.table");

var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: '',
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

    .then(function ({master}) {
        switch (master) {
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
                addRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an Employee Role":
                updateEmployeeRole();
                break;
            case "Exit":
                connection.end();
                break;
        }
    }
    )
}

const viewAllDepartments = () => {
    console.log("Viewing All Departments");
    
    var query = `SELECT * FROM departments;`
    connection.query(query, (err, res) => {
        if (err) throw err;
    
        console.table(res);
        console.log("All Departments Viewed");
    

    runRegistrar();
});
}

const viewAllRoles = () => {
    console.log("Viewing All Roles");
    
    var query = 
    `SELECT * FROM roles
    LEFT JOIN departments
    ON roles.departments_id = departments.id;`
    connection.query(query, (err, res) => {
        if (err) throw err;
    
        console.table(res);
        console.log("All Roles Viewed");
    

    runRegistrar();
});
}

const viewAllEmployees = () => {
    console.log("Viewing All Employees");
    
    var query = 
    `SELECT * FROM employees
    LEFT JOIN roles
    ON employees.roles_id = roles.id
    LEFT JOIN departments
    ON roles.departments_id = departments.id;`
    connection.query(query, (err, res) => {
        if (err) throw err;
    
        console.table(res);
        console.log("All Employees Viewed");
    

    runRegistrar();
});
}

// ADD DEPARTMENT
const addDepartment = () => {
    console.log('You are about to add a new department');

    var query = `SELECT * FROM departments;`

    connection.query(query, (err, res) => {
        if (err) throw err;

        const departmentChoices = res.map(({ id, name }) => ({
            value: id, name: `${name}`
        })
        )
        console.table(res);
        
        departmentPrompt(departmentChoices);   
    })
}

function departmentPrompt(departmentChoices) {
    inquirer
        .prompt([
            {
            type: "input",
            name: "id",
            message: "Please enter the ID of the department you wish to add."
            },
            {
            type: "input",
            name: "department_name",
            message: "Please enter the name of the department you wish to add."
            }
        ])
        .then(function (answers) {
            var query = `
            INSERT INTO departments
            VALUES (${answers.id}, '${answers.department_name}');`;

            connection.query(query, (err, res) => {
                if (err) throw err;
        
                console.table(res);
                console.log("Department added!");
                
                runRegistrar();
                
            });
        });
    }


// ADD ROLE
const addRole = () => {
    console.log('You are about to add a new role');

    var query = `SELECT * FROM roles;`

    connection.query(query, (err, res) => {
        if (err) throw err;

        const roleChoices = res.map(({ id, title, salary, manager, departments_id }) => ({
            value: id, title: `${title}`, salary: `${salary}`, manager: `${manager}`, departments_id: `${departments_id}`
        })
        )
        
        rolePrompt(roleChoices);   
    })
}

function rolePrompt(roleChoices) {
    inquirer
        .prompt([
            {
            type: "input",
            name: "id",
            message: "Please enter the ID of the role you wish to add."
            },
            {
            type: "input",
            name: "title",
            message: "Please enter the title of the role you wish to add."
            },
            {
            type: "input",
            name: "salary",
            message: "Please enter the salary of the role you wish to add."
            },
            {
            type: "input",
            name: "manager",
            message: "Please enter the manager of the role you wish to add."
            },
            {
            type: "input",
            name: "departments_id",
            message: "Please enter the department id of the role you wish to add."
            }
        ])
        .then(function (answers) {
            var query = `
            INSERT INTO roles
            VALUES (${answers.id}, '${answers.title}', '${answers.salary}', '${answers.manager}', '${answers.departments_id}')`;

            connection.query(query, (err, res) => {
                if (err) throw err;
        
                console.log("Role added!");
                
                runRegistrar();
                
            });
        });
    }

// ADD EMPLOYEE
const addEmployee = () => {
    console.log('You are about to add a new employee');

    var query = `SELECT * FROM employees;`

    connection.query(query, (err, res) => {
        if (err) throw err;

        const employeeChoices = res.map(({ id, first_name, last_name, roles_id }) => ({
            value: id, first_name: `${first_name}`, last_name: `${last_name}`, roles_id: `${roles_id}`
        })
        )
        
        employeePrompt(employeeChoices);   
    })
}

function employeePrompt(employeeChoices) {
    inquirer
        .prompt([
            {
            type: "input",
            name: "id",
            message: "Please enter the ID of the employee you wish to add."
            },
            {
            type: "input",
            name: "first_name",
            message: "Please enter the first name of the employee you wish to add."
            },
            {
            type: "input",
            name: "last_name",
            message: "Please enter the last name of the employee you wish to add."
            },
            {
            type: "input",
            name: "roles_id",
            message: "Please enter the role ID of the employee you wish to add."
            }
        ])
        .then(function (answers) {
            var query = `
            INSERT INTO employees
            VALUES (${answers.id}, '${answers.first_name}', '${answers.last_name}', '${answers.roles_id}')`;

            connection.query(query, (err, res) => {
                if (err) throw err;
        
                console.log("Employee added!");
                
                runRegistrar();
                
            });
        });
    }

//Updates an employee's role
function updateEmployeeRole () {
    console.log("You are about to update an employee's role");

    var query = `SELECT * FROM employees;`

    connection.query(query, (err, res) => {
        if (err) throw err;

        const updatedRole = res.map(({ roles_id, last_name }) => ({
            roles_id: `${roles_id}`, last_name: `${last_name}`
        })
        )
        
        updatePrompt(updatedRole);   
    })
}

function updatePrompt(updatedRole) {
    inquirer
        .prompt([
            {
            type: "input",
            name: "roles_id",
            message: "Please enter the new role id of the employee."
            },
             {
            type: "input",
            name: "last_name",
            message: "Please enter the last name of the employee."
            }
        ])
        .then(function (answers) {
            var query = `
            UPDATE employees
            SET roles_id = "${answers.roles_id}"
            WHERE last_name = "${answers.last_name}";`

            connection.query(query, (err, res) => {
                if (err) throw err;
        
                console.log("Employee role updated!");
                
                runRegistrar();
                
            });
        });
    }