INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Marketing"),
       (3, "Customer Relations"),
       (4, "Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES (01, "Sales Representative", 50000, 1),
       (02, "Sales Manager", 80000, 1),
       (03, "Social Media Coordinator", 65000, 2),
       (04, "Social Media Manager", 95000, 2),
       (05, "Call Center Receptionist", 40000, 3),
       (06, "Call Center Manager", 70000, 3),
       (07, "HR Representative Manager", 60000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Brad", "Mcdaniel", 02, Null),
       (002, "Anna", "Vargas", 01, 001),
       (003, "Shelly", "Holloway", 01, 001),
       (004, "Cody", "Mcbride", 01, 001),
       (005, "Phillip", "Gregory", 01, 001),
       (006, "Josh", "Vega", 01, 001),
       (007, "Jaime", "Nguyen", 01, 001),
       (008, "Lonnie", "Wertz", 01, 001),
       (009, "Celeste", "Graf", 01, 001),
       (010, "Stephan", "Cooney", 01, 001),
       (011, "Chelsea", "Marshall", 01, 001),
       (012, "Alma", "Adams", 04, NULL),
       (013, "Salvador", "Owen", 03, 012),
       (014, "Monique", "Wagner", 03, 012),
       (015, "Brenton", "Babb", 06, NULL),
       (016, "Brandy", "Reid", 05, 015),
       (017, "Myra", "Stevenson", 05, 015),
       (018, "Rolando", "Padilla", 05, 015),
       (019, "Matthew", "Greer", 05, 015),
       (020, "Stacey", "Silva", 05, 015),
       (021, "Francis", "Harper", 05, 015),
       (022, "Lana", "Conner", 07, NULL),
       (023, "Brent", "Carson", 07, NULL);