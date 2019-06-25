CREATE TABLE person (
    id          SERIAL  PRIMARY KEY NOT NULL,
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

-- giving a user access to the specified table
CREATE USER familyhistoryuser WITH PASSWORD 'elijah';
-- to login, psql -Ufamilyhistoryuser familyhistory<name of database>
-- psql -U(name of user) (name of database)


-- This way requires each table to grant specified user access
GRANT SELECT, INSERT, UPDATE ON person TO familyhistoryuser; -- for now use this one

-- Open access to a specified table to a specified user
GRANT ALL ON person TO familyhistoryuser;

-- restricted access to all the ables in the public schema to specified user
GRANT SELECT, INSERT, UPDATE ON schema:public TO familyhistoryuser;

GRANT USAGE, SELECT ON SEQUENCE person_id_seq TO familyhistoryuser;

