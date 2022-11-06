INSERT INTO departments (id, department_name)
VALUES ("1", "Executive"),
       ("2", "Sales"),
       ("3", "Accounting"),
       ("4", "Technology");

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
VALUES ("10101", "Jason", "Kart", 101),
       ("10201", "Chris", "Barn", 102),
       ("10301", "Rebecca", "Berger", 103),
       ("20101", "Miles", "Greenberg", 201),
       ("20201", "Andy", "Sykes", 202),
       ("20202", "Rachel", "Castle", 202),
       ("20203", "Carter", "Miller", 202),
       ("20204", "Michael", "Jacobs", 202),
       ("30101", "Ari", "Aabad", 301),
       ("30201", "Sadler", "Ross", 302),
       ("30202", "Payton", "Woodley", 302),
       ("30203", "Sharanya", "Akuhla", 302),
       ("30204", "Sela", "Greys", 302),
       ("40101", "Warren", "Jace", 401),
       ("40102", "Lisa", "Williams", 401),
       ("40103", "Ezra", "Gold", 401),
       ("40201", "Perez", "Olivarez", 402),
       ("40202", "Thomas", "Hinch", 402);