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

###Exercíio5

a.
A tabela em si tera um id como identificador e chave primária que será uma string com até 255 caracteres, um titlo com o mesmo tipo porém não pode ser nulo e tem que ser único, uma sinópise do tipo texto e não pode ser nula, uma data de lançamento que também não pode ser nula e uma nota que é um número inteiro e tabém não nulo

b.
INSERT INTO Movie (id, title, synopsis, release_Date, rating) VALUES 
(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
7);

c.
INSERT INTO Movie (id, title, synopsis, release_Date, rating) VALUES 
(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10);

d.
INSERT INTO Movie (id, title, synopsis, release_Date, rating) VALUES 
(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8);

e.
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
    "004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. 
    O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, 
    candidato de Deus a santo.",
    "2003-01-31",
    9
)

###Exercício6

a.
SELECT id, title, rating FROM Movie WHERE id = "003";

b.
SELECT * FROM Movie WHERE title = "Deus é Brasileiro";

c.
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

###Exercício7

a.
SELECT * FROM Movie
WHERE title LIKE "%vida%";

b.
SELECT * FROM Movie
WHERE title LIKE "%Dona%" OR
      synopsis LIKE "%Dona%";

c.
SELECT * FROM Movie
WHERE release_date < "2022-08-22";

d.
SELECT * FROM Movie
WHERE release_date < "2022-08-22" AND 
      (title LIKE "%Deus%" OR
      synopsis LIKE "%Deus%") AND rating > 7;