-- SELECT departments_id, department_name
SELECT *
FROM roles
LEFT JOIN departments
ON roles.departments_id = departments.id;

SELECT *
FROM employees
LEFT JOIN roles
ON employees.roles_id = roles.id;