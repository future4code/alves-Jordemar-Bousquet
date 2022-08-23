### Exercício1

a.
Eliminaria a coluna de Salários.

b.
Trocaria o nome da linha Genero para Sexo.

c.
Trocaria o números de caracteres da linha genero para 255.

d.
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício2

a.
UPDATE Actor
SET name = "Moacyr Franco"
SET birth_date = "1965/10/05"
WHERE id = "003"

b.
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes"

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES"

c.
UPDATE Actor
SET name = "Moacyr Franco", salary = "50000", birth_date = "1965/10/05", gender = "male"
WHERE id = "005"

d.
a query deu certo porem ão aconteceu nenhuma alteração na tabela 

### Exercício3

a.
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b.
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

### Exercício4

a.
SELECT MAX(salary) FROM Actor

b.
SELECT MIN(salary) FROM Actor WHERE gender = "female"

c.
SELECT COUNT(*) FROM Actor WHERE gender = "female"

d.
SELECT SUM(salary) FROM Actor

### Exercício5 

a.
A query realiza a contagem de atores por generos masculino e feminino.

b.
SELECT id, name FROM Actor
ORDER BY name DESC;

c.
SELECT * FROM Actor
ORDER BY salary;

d.
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e.
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;


### Exercício6

a.
ALTER TABLE Movie ADD playing_limit_date DATE;

b.
ALTER TABLE Movie CHANGE rating rating FLOAT;

c.
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"

UPDATE Movie
SET
	playing_limit_date = "2022-12-31"
WHERE id = "002"

d.
O retorno não deu nenhum valor já que o id não existe mais na tabela

### Exercício 7 
a.2 b.8 c.1 d.1 e.9 f.7

### Exercício8

a.
SELECT * FROM Movie ORDER BY title;

b.
SELECT * FROM Movie ORDER BY title LIMIT 5;

c.
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

d.
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;



