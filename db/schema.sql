DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE departments (
  id INT NOT NULL,
  department_name TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL,
  title TEXT NOT NULL,
  salary TEXT NOT NULL,
  manager TEXT NOT NULL,
  departments_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  roles_id INT NULL,
  PRIMARY KEY (id)
);