// Exercícios de interpretação de código //
// 1 a. "Matheus Nachtergaele" , "Virginia Cavendish" e canal: "Globo", horario: "14h" // 
// 2 a. nome: "Juca", idade: 3, raca: "SRD", nome: "Juba", idade: 3, raca: "SRD" , nome: "Jubo", idade: 3, raca: "SRD"  b. Copia as propiades do objeto para que possa ser incluidas alterações sem modificar o objeto original ///
// 3 a. False, undefined b.a propiedade "backender" foi definida no obejto porém a altura nçao foi definida, a função criada realiza uma busca dentro do objeto os pararámetros informados // 

// Exercícios de escrita de código // 

// 1 // 
// a // 

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"],
}

function apresentacao(nome,apelido1,apelido2,apelido3){
    
    let n = nome
    let ap1 = apelido1
    let ap2 = apelido2
    let ap3 = apelido3
    console.log(`Eu sou ${n} ,mais pode me chamar de ${ap1}, ${ap2} ou ${ap3}`)

}

apresentacao(pessoa.nome,pessoa.apelidos[0],pessoa.apelidos[1],pessoa.apelidos[2])

//b//

const novoApelidos = {
 ...pessoa,
    apelidos: ["Mandona","Amada","Manda"]
}

apresentacao(novoApelidos.nome,novoApelidos.apelidos[0], novoApelidos.apelidos[1],novoApelidos.apelidos[2])


//2//
//a//

const pessoa2 = {
    nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}
//b//
function dados(pessoa2){
    let array =[]
    let nome = pessoa2.nome
    array.push(nome)
    let tamNome = nome.length
    array.push(tamNome)
    let idade = pessoa2.idade
    array.push(idade)
    let profissao = pessoa2.profissao
    array.push(profissao)
    tamprofissao = profissao.length
    array.push(tamprofissao)
    console.log(array)
    

}

dados(pessoa2)

//3//
//a//

let carrinho = []

let fruta = {
    nome: "jaca",
    dipsonibilidade: true
}

let fruta2 = {
    nome: "uva",
    disponibilidade: true
}

let fruta3 = {
    nome: "banana",
    disponibilidade: false
}

function compras(a,b,c){
    carrinho.push(a)
    carrinho.push(b)
    carrinho.push(c)
}
compras(fruta,fruta2,fruta3)
console.log(carrinho)

//DESAFIO // 
//1//
function usuario(){
    let n = prompt("Digite seu nome")
    let i = prompt("Digite sua idade")
    let p = prompt("Digite sua profissão")

    let dados = {
        nome: n,
        idade: i,
        profissao: p
        
    }
    console.log(dados)
}

usuario()
// 2 // 

function verificar(){

let filme1 = { 
    nome: "Vingadores",
    ano: "2012"

} 

let filme2 = {
    nome:"Homem Aranha",
    ano: 2001
}

comparaAnoMenor = filme1.ano < filme2.ano
comparaMesmoAno = filme1.ano == filme2.ano

console.log(`O primeiro filme foi lançado antes do segundo ${comparaAnoMenor}`)
console.log(`O primeiro filme foi lançado no mesmo ano no segundo ${comparaMesmoAno}`)

}

verificar()