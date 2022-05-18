// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = +prompt("Digite a altura doe retângulo")
  let largura = +prompt("Digite a largura do triângulo")

  let area = altura * largura

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = +prompt("Digite o ano atual")
  let anoNascimento = +prompt("Digite o seu ano de nascimento")

  let idade = anoAtual - anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  let imc = peso / (altura*altura)
  return imc
}

calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let arrayCores = []
  let cor1 = prompt("Digite sua primeira cor favorita")
  arrayCores.push(cor1)
  let cor2 = prompt ("Digite sua segunda cor favorita")
  arrayCores.push(cor2)
  let cor3 = prompt("Digite sua terceira cor favorita")
  arrayCores.push(cor3)

  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let mauscula = string.toUpperCase()
  return mauscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let lucro = custo / valorIngresso
  return lucro

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  tam = string1.length === string2.length
  return tam
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 let ultimoElemento = array.pop(array)
 return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultimo = array.pop(array)
  let primeiro = array.shift()
  let trocaPrimeiro = array.unshift(ultimo)
  let trocaUltimo = array.push(primeiro)
  return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  checa = string1.toLowerCase() === string2.toLowerCase()

  return checa
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = +prompt("Digite o ano atual")
  let anoNascimento = +prompt("Digite o ano do seu nascimento")
  let anoRg = +prompt("Digite o ano de emissão da sua RG")

  let idade = anoAtual - anoNascimento
  let renovaRg = anoAtual - anoRg

  let vinteMenos = idade <= 20 && renovaRg >= 5
  let vinteCinqueta = idade > 20 && idade < 50 && renovaRg >= 10
  let maiorCinqueta = idade > 50 && renovaRg >= 15

  let renovar = vinteMenos || vinteCinqueta || maiorCinqueta

  console.log(renovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}