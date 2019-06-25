CREATE TABLE person (
    id          SERIAL  PRIMARY KEY NOT NULL,
    firstN      VARCHAR(100) NOT NULL,
    lastN       VARCHAR(100), 
    birthday    DATE
);

INSERT INTO person (firstN, lastN, birthday) values ('Thomas', 'Burton', '1878-08-28');
INSERT INTO person (firstN, lastN, birthday) values ('Herbert', 'Burton', '1847-10-01');
INSERT INTO person (firstN, lastN, birthday) values ('Mary', 'Pass', '1849-08-06');
INSERT INTO person (firstN, lastN, birthday) values ('Jeffery', 'Burton', '1880-06-13');

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

