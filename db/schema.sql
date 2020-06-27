DROP DATABASE IF EXISTS burgers_db;

-- Create the `burgers_db`.
CREATE DATABASE burgers_db;

-- Switch to or use the `burgers_db`.
USE burgers_db;

-- Create a `burgers` table with these fields:
--      **id**: an auto incrementing int that serves as the primary key.
--      **burger_name**: a string.
--      **devoured**: a boolean.
--      **createAt**: timestamp.
CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);