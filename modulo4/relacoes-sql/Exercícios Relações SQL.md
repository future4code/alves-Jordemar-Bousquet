### Exercício 1 
a.
Chave estrangeira é um tipo de chave que faz referencia a outro elemento de outra tabela.

b.
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
     7,
	"004"
);

c.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-jordemar-bousquet`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
O mesmo não consegue localizar a chave estrangeira referenciada.


d.
ALTER TABLE Movie DROP COLUMN rating;

e.
para apagar um filme com avaliação primeiro teria que apagar toda a tabela de avaliação. 

### Exercício 2

a.
Esta tablea cria uma relação entre os atores e os filmes feito por eles.

b.
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
);

c.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-jordemar-bousquet`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Não tem como refrenciar um ator com o id inexistente ao filme

d.
Não tem como apagar nenhum ator a não ser que se apague toda a tabela.


### Exercício 3 

a.
este operador juta apenas valores que correspondem as duas tabelas refrenciadas.

b.
SELECT Movies.id, name, rate FROM Movies
INNER JOIN Rating
ON Movies.id = Rating.movie_id;