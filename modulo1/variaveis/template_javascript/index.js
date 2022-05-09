/* Exercícios de interpretação de código 
 1 Resposa = 10 - 10 5 
 2 Resposta = 10 10 10
 3 Respsota = horasTrabalho - recebePorDia */

 // Exercícios de escrita de código //
 
 // Exercício 1 //

let nome
let idade
console.log(typeof nome,idade)

 // Não atribuimos nenhum valor a variável, então as mesma estão como indefinidas no typeof //

 nome = prompt('Digite o seu nome')
 idade = prompt('Digite sua idade')

 console.log(typeof nome, typeof idade)

 // Os valores que o usuários inserem como padrão são atribuidas como String //

 console.log('Olá', nome,'você tem',idade ,'anos')

  // Exercício 2 //

let resp1 = prompt('Você está usando uma roupa azul hoje?[SIM ou NÂO]')
let resp2 = prompt('O dia está ensolarado hoje?[SIM ou NÂO]')
let resp3 = prompt('Está achando dificil estudar javascript?[SIM ou NÂO]')

 console.log('Você está usando uma roupa azul hoje-',resp1)
 console.log('O dia está ensolarado hoje? -',resp2)
 console.log('Está achando difícil estudar javascript? -',resp3)

 //Exercício 3 // 

let a = 10
let b = 25
let c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio // 
let valor1 = prompt('Digite o primeiro valor')
let valor2 = prompt('Digite o segundo valor')
let numeroValor1 = Number(valor1)
let numeroValor2 = Number(valor2)
let soma = numeroValor1 + numeroValor2
let multi = numeroValor1 * numeroValor2

console.log('O primeiro número somado ao segundo número resulta em:', soma)
console.log('O primeiro número multiplicado pelo segundo número resulta em:', multi)




