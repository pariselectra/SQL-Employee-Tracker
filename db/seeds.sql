INSERT INTO departments (id, department_name)
VALUES ("1", "Executive"),
       ("2", "Sales"),
       ("3", "Accounting"),
       ("4", "Technoloogy");

INSERT INTO roles (id, title, salary, manager, departments_id)
VALUES ("101", "CEO", "$850,000", "the board", 1 ),
       ("102", "CFO", "$600,000", "CEO", 1 ),
       ("103", "CTO", "$608,000", "CEO", 1 ),
       ("201", "Sales Manager", "$170,000", "CEO", 2),
       ("202", "Sales Representative", "$101,000", "Sales Manager", 2),
       ("301", "Head Accountant", "$130,000", "CFO", 3),
       ("302", "Accountant", "$90,000", "Head Accountant", 3),
       ("401", "Senior Software Engineer", "$170,000", "CTO", 4),
       ("402", "Junior Software Engineer", "$93,000", "Senior Software Engineer", 4);

INSERT INTO employees (id, first_name, last_name, roles_id)
VALUES ("10101", "Jason", "Kart", 1),
       ("10201", "Chris", "Barn", 2),
       ("10301", "Rebecca", "Berger", 3),
       ("20101", "Miles", "Greenberg", 4),
       ("20201", "Andy", "Sykes", 5),
       ("20202", "Rachel", "Castle", 5),
       ("20203", "Carter", "Miller", 5),
       ("20204", "Michael", "Jacobs", 5),
       ("30101", "Ari", "Aabad", 6),
       ("30201", "Sadler", "Ross", 7),
       ("30202", "Payton", "Woodley", 7),
       ("30203", "Sharanya", "Akuhla", 7),
       ("30204", "Sela", "Greys", 7),
       ("40101", "Warren", "Jace", 8),
       ("40102", "Lisa", "Williams", 8),
       ("40103", "Ezra", "Gold", 8),
       ("40201", "Perez", "Olivarez", 9),
       ("40202", "Thomas", "Hinch", 9);