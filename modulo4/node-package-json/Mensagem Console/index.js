// 1 a - utilizando o comando node --Nome do arquivo -- 

//b//
const nome = process.argv[2]
const idade = Number(process.argv[3])

//c//
const novaIdade = idade + 7 

console.log(`Olá ${nome}, você tem ${idade} anos, em sete anos você terá ${novaIdade}`)