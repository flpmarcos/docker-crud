CREATE DATABASE IF NOT EXISTS 
    programadormaromba;

USE programadormaromba;

CREATE TABLE IF NOT EXISTS products (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10,2),
    PRIMARY KEY (id)
)

INSERT INTO products VALUE('0','Teste docker 01','2500');
INSERT INTO products VALUE('0','Teste docker 02','900');
