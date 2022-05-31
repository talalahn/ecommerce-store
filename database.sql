

-- create the table
CREATE TABLE beanie_babies (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(20) NOT NULL,
  color varchar(20) NOT NULL,
  price integer NOT NULL
);

-- insert the values
INSERT INTO beanie_babies
(name, color, price)
VALUES
('Becky', 'blonde', '1500'),
 ('Stacy', 'red', '1200'),
 ('Raven', 'black', '800'),
 ('Honey', 'brunette', '600');


-- read all of the database
 SELECT * FROM beanie_babies;