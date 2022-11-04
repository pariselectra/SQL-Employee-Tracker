SELECT department_name
FROM departments
FULL OUTER JOIN roles
ON departments.department_name = roles.departments_id;