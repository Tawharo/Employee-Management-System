USE employee_trackerDB;

/* departments */
INSERT INTO department (name)
VALUES ("Sales"), ("Accounting"), ("Management"), ("Human Resources");

/* roles */
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 75000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Associate Accountant", 45000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Assistant Accountant", 55000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Accountant", 75000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("General Manager", 95000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Assistant", 50000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Manager", 75000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 65000, 1);

/* employees */
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tawheed", "Haroon", 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Emma", "Wiggle", 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Eden", "Claire", 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Park", 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kamal", "Islam", 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Valerie", "Putnam", 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Thor", "VonDerbeek", 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Carlota", "Thompson", 7);
