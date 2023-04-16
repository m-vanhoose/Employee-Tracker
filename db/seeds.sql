INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Marketing"),
       (3, "Customer Relations"),
       (4, "Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES (01, "Sales Representative", 50,000, 1),
       (02, "Sales Manager", 80,000, 1),
       (03, "Social Media Coordinator", 65,000, 2),
       (04, "Social Media Manager", 95,000, 2),
       (05, "Call Center Receptionist", 40,000, 3),
       (06, "Call Center Manager", 70,000, 3),
       (07, "HR Representative", 60,000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, Brad, Mcdaniel, 02, 0001),
       (002, Anna, Vargas, 01, NULL),
       (003, Shelly, Holloway, 01, NULL),
       (004, Cody, Mcbride, 01, NULL),
       (005, Phillip, Gregory, 01, NULL),
       (006, Josh, Vega, 01, Null),
       (007, Jaime, Nguyen, 01, NULL),
       (008, Lonnie, Wertz, 01, NULL),
       (009, Celeste, Graf, 01, NULL),
       (010, Stephan, Cooney, 01, NULL),
       (011, Chelsea, Marshall, 01, NULL),
       (012, Alma, Adams, 04, 0002),
       (013, Salvador, Owen, 03, NULL),
       (014, Monique, Wagner, 03, NULL),
       (015, Brenton, Babb, 06, 0003),
       (016, Brandy, Reid, 05, NULL),
       (017, Myra, Stevenson, 05, NULL),
       (018, Rolando, Padilla, 05, NULL),
       (019, Matthew, Greer, 05, NULL),
       (020, Stacey, Silva, 05, NULL),
       (021, Francis, Harper, 05, NULL),
       (022, Lana, Conner, 07, NULL),
       (023, Brent, Carson, 07, NULL);