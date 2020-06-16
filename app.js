// dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_trackerDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to employee_trackerDB!");

    runEmployeetracker();
});

function runEmployeetracker() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Role",
                "Delete Employee",
                "EXIT"
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "View Departments":
                    viewDepartments();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                case "View Employees":
                    viewEmployees();
                    break;
                case "Update Employee Role":
                    updateRoles();
                    break;
                case "Delete Employee":
                    deleteEmployee();
                case "EXIT":
                    connection.end();
                    break;
            }
        })
}

function addDepartment() {
    // loadDepartment();
    inquirer
        .prompt({
            name: "departmentName",
            type: "input",
            message: "What kind of department would you like to create?"
        }).then(function (answer) {
            connection.query("INSERT INTO department SET ?",
                {
                    name: answer.departmentName,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your department was created!");
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );

        })
}

function addRole() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What title would you like to add?",
            },
            {
                name: "salary",
                type: "number",
                message: "What is the starting salary?"
            },
            {
                name: "departmentID",
                type: "number",
                message: "What is the department ID?"
            }
        ]).then(function (answer) {
            connection.query("INSERT INTO role SET ?",
                {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: answer.departmentID
                },
                function (err) {
                    // if (err) throw err;
                    console.log("Your role was created!!");
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );

        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is your first name?"
            },
            {
                name: "lastName",
                type: "input",
                message: "What is your last name?"
            },
            {
                name: "roleID",
                type: "number",
                message: "What is your role ID?"
            },
            {
                name: "managerID",
                type: "number",
                message: "What is your manager's ID?"
            }
        ]).then(function (answer) {
            connection.query("INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.roleID,
                    manager_id: answer.managerID
                },
                function (err) {
                    // if (err) throw err;
                    console.log("Employee was created!!");
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );

        })
}



function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, results) {
        console.table(results);
        start();
    })
}

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, results) {
        console.table(results);
        start();
    })
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, results) {
        console.table(results);
        start();
    })
}

function updateRoles() {
    inquirer
        .prompt([
            
            {
                name: "roleUpdate",
                type: "number",
                message: "What role ID would you like to assign?"

            },

            {
                name: "employeeID",
                type: "number",
                message: "What is the employee ID?"
            }
           
        ]).then(function (answer) {
                var query = "UPDATE employee SET role_id = ? WHERE id = ?";
                connection.query(query, [answer.roleUpdate, answer.employeeID], function (err, results) {
                    if (err) throw err;
                    console.table(results);
                    start();
                })

            })

}

function deleteEmployee() {
    inquirer
        .prompt([{
            name: "id",
            type: "number",
            message: "What is the employee's ID?"
        }
        ]).then(function(answer) {
            var query = "DELETE FROM employee WHERE id = ?";

            connection.query(query, answer.id, function (err, results) {
                if (err) throw err;
                console.log("Employee successfully removed!")
                console.table(results);
                start();
            }
            )
        })
}