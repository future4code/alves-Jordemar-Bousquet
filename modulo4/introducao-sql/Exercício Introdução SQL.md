###Exercício1
a. 
id é uma string de até 255 caracteres e a chave primária da tabela.
name é uma string de até 255 caracteres e não pode ser nulo.
birth_date é no formato de data(aaa/mm/dd) e também não pode ser nulo.
gender é uma string com até 6 caracteres e não pode ser nulo

b.
SHOW DATABESES - mostra o nome dos bancos de dados disponíveis
SHOW TABLES - mostra as tabelas que foram criadas.

c.
DESCRIBE - aparecem todas as propiedades criadas para a tabela Actor.

###Exercício2

a.
insert into introSQL_Actor (id, name, salary, birth_date, gender) values ("002", "Glória Pires", 120000, "1963-08-23", "female");

b.
'codigo de erro : 1062. Entrada Duplicada para "002" na chave primária'. o Erro ocorre pois o valor para chave primária tem que ser único para cada item na tabela 

c.
'Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1' os valores estão divergentes da coluna 

d.
'Código de erro: 1364. O campo 'nome' não tem um valor padrão' o nome não pode ser um valor nulo.

e.
'Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1' o valor de data tem que ter as aspas 

###Exercíco3

a.
SELECT * FROM introSQL_Actor WHERE gender = "female";

b.
SELECT salary FROM introSQL_Actor WHERE name = "Tony Ramos";

c.
Como não há nenhum valor invalido e retorno é nulo.

d.
SELECT id,name, salary FROM introSQL_Actor WHERE salary > 50000;

e.
Error Code: 1054. Unknown column 'nome' in 'field list' nome não foi definido na tabela 

###Exercício4

a.
LIKE - Procura um valor especificamente passado , BETWEEN - Procura algo entre um valor e outro NOT - Procura valores que não contenhar a informacao passada 

b.
SELECT * FROM introSQL_Actor WHERE name NOT LIKE "A%" AND salary > 350000;

c.
SELECT * FROM introSQL_Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

d.
SELECT * FROM introSQL_Actor WHERE
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
