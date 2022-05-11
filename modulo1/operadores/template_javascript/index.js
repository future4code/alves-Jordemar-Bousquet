// Exercícios de interpretação de código //
//1. a -false  b- false c- true d- boolean //
//2. Tdoa váriaves solicitada para o usuário tem entrada como String, antes da soma é necessário converter para Number //
//3. const soma = Number(primeiroNumero) + Number(pegundoNumero) //

// Exercícios de escrita de código // 
//1//
idade = prompt('Digite a sua idade')
amigoIdade = prompt('Digite a idade do seu melhor amigo(a)')
verificarIdade = idade > amigoIdade
diferencaIdade = idade - amigoIdade
console.log('A sua idade é maior do que a do seu amigo(a)', verificarIdade)
console.log ('A diferenca de idade é de',diferencaIdade, 'ano(s)')

//2//
numeroPar = prompt('Digite um número par')
restoDivisão = numeroPar % 2
console.log(restoDivisão)
// Toda resto de divisão por numero par é igual a zero //
// Caso o usuário digite um número impar o resultado é sempre 1 //

//3//
idadeUsuário = prompt('Digite a sua idade')
idadeMeses = idadeUsuário * 12
idadeDias = idadeMeses * 30
idadeHoras = idadeDias * 24
console.log('Você tem',idadeUsuário,'anos e aproximadamente',idadeMeses,'meses',idadeDias,'dias e', idadeHoras,'horas')

primeiroNumero = prompt('Digite o primeiro número')
segundoNumero = prompt('Digite o segundo número')

verificaMaior = primeiroNumero > segundoNumero
verificaIgual = primeiroNumero === segundoNumero
dividePrimeiroSegundo = primeiroNumero % segundoNumero == 0
divideSegundoPrimeiro = segundoNumero % primeiroNumero == 0
console.log('O primeiro número é maior que o segundo' , verificaMaior)
console.log('O primeiro número é igual ao segundo', verificaIgual)
console.log('O primeiro número é divisível pelo segundo', dividePrimeiroSegundo)
console.log('O segundo número é divisível pelo primeiro', divideSegundoPrimeiro)




