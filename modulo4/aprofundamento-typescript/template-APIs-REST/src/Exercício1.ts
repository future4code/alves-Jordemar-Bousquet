// Exercício1 // 
//a. Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
// Resposta - A variável apresenta um erro "/O tipo 'number' não pode ser atribuído ao tipo 'string'"/

//b. Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
//Resposta- Utilizamos o | e colocamos os dois tpois de valores que a variável pode receber 



//c.Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
//nome, que é uma string;
//idade, que é um número;
//corFavorita, que é uma string.

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos//

//d. Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum CorFavorita {
    VERMELHA = 'vermelha',
    LARANJA = 'laranja',
    AMARELA = 'amarela',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'

}

type pessoa = {
    nome:string,
    idade:number,
    corFavorita:string   
} 

const pessoa1: pessoa = {
    nome:'Joao',
    idade:34,
    corFavorita:CorFavorita.VERMELHA  
}

const pessoa2: pessoa = {
    nome:'Maria',
    idade:25,
    corFavorita:CorFavorita.VIOLETA
}

const pessoa3: pessoa = {
    nome:'Mario',
    idade:55,
    corFavorita:CorFavorita.AZUL  
}

