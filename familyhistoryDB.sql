CREATE TABLE person (
    id          SERIAL PRIMARY KEY NOT NULL,
    firstN      VARCHAR(100) NOT NULL,
    lastN       VARCHAR(100), 
    birthday    DATE
);

INSERT INTO person (firstN, lastN, birthday) values ('Dustin', 'Christensen', '1977-06-25');
INSERT INTO person (firstN, lastN, birthday) values ('Mark', 'Christensen', '1952-04-07');
INSERT INTO person (firstN, lastN, birthday) values ('Nancy', 'Luna', '1956-06-02');
INSERT INTO person (firstN, lastN, birthday) values ('Wayne', 'Christensen', '1918-07-12');
INSERT INTO person (firstN, lastN, birthday) values ('Manuel', 'Luna', '1931-06-16');
INSERT INTO person (firstN, lastN, birthday) values ('Helen', 'Schmidt', '1926-11-22');
INSERT INTO person (firstN, lastN, birthday) values ('Janice', 'Underwood', '1930-2-14');

CREATE TABLE parent2child (
    pc_id          SERIAL PRIMARY KEY NOT NULL,
    parent_FK   INT references person(id),
    child_FK    INT references person(id)
);

INSERT INTO parent2child (parent_FK, child_FK) values (2,1);
INSERT INTO parent2child (parent_FK, child_FK) values (3,1);
INSERT INTO parent2child (parent_FK, child_FK) values (4,2);
INSERT INTO parent2child (parent_FK, child_FK) values (6,2);
INSERT INTO parent2child (parent_FK, child_FK) values (5,3);
INSERT INTO parent2child (parent_FK, child_FK) values (7,3);
