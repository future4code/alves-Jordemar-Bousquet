// Exercícios de interpretação de código//
//1//
// a. underfined b. null c. 11 d. 3 e. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 f. 9 //

//2//
// SUBI NUM ÔNIMBUS EM MIRROCOS //

// Exercícios de escrita de código // 

//1//
const nomeUsuario = prompt(`Digite um nome do Usuário`)
const emailUsuario = prompt(`Digite seu email de Usuário`)

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Bem vinda(o) ${nomeUsuario}`)

//2//
let comidaFavorita = ['Pizza','Empada','Pastel','Lazanha','Coxinha']

console.log(`a.${comidaFavorita}`)
console.log(`b. Essas são as minhas comidas favoritas \n ${comidaFavorita[0]}\n ${comidaFavorita[1]}\n ${comidaFavorita[2]}\n ${comidaFavorita[3]}\n ${comidaFavorita[4]}\n`)

let comidaUsuario = prompt('Qual a sua comida favorita?')
comidaFavorita = ['Pizza',comidaUsuario,'Pastel','Lazanha','Coxinha']
console.log(`c.${comidaFavorita}`)

//3//
let listaDetarefas = []
listaDetarefas.push(prompt('Qual a primeira tarefa que você tem que realizar hoje?'))
listaDetarefas.push(prompt('Qual a segunda tarefa que você tem que realizar hoje?'))
listaDetarefas.push(prompt('Qual a terceira tarefa que você tem que realizar hoje?'))
console.log(listaDetarefas)

let removeTarefa = prompt(`Quais tarefas já realizou hoje? 0. ${listaDetarefas[0]} 1.${listaDetarefas[1]} ou 2.${listaDetarefas[2]}`)

listaDetarefas.splice(removeTarefa,1)
console.log(listaDetarefas)

// Desafio //

//1//
const frase = prompt('Digite uma frase')
listaFrase = frase.split(' ')
console.log(listaFrase)

//2//
let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
index = arrayFrutas.indexOf("Abacaxi")
console.log(`A fruta ${arrayFrutas[2]} está no indíce ${index}`)


