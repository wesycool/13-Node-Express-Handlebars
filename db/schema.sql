DROP DATABASE IF EXISTS burgers_db

-- Create the `burgers_db`.
CREATE DATABASE burgers_db

-- Switch to or use the `burgers_db`.
USE burgers_db

-- Create a `burgers` table with these fields:
--      **id**: an auto incrementing int that serves as the primary key.
--      **burger_name**: a string.
--      **devoured**: a boolean.
CREATE TABLE burgers(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255),
    devoured BOOLEAN
)