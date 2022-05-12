// **Exercícios de interpretação de código** //

//1//
//a.10 50 // 
//b. A função fará o calculo porem não irá imprimir o resultado no console //

// 2 // 
//a. A função gera um input de texto do usuário e transforma o mesmo em minúsculo e também confere se a palavra "cenoura" está inclusa neste texto digitado // 
//b. I.true  II.true  III.true //


// Exercícios de escrita de código //
//1//
//a//

function frase(){
    console.log (`Olá, me chamo ${nome}, tenho ${idade} anos, moro em ${cidade} e  sou ${profissão} `)
}

let nome = "Jordemar"
let idade = 34
let cidade = "Rio de Janeiro"
let profissão = "estudante"

frase()

//b//

function frase2(nome,idade,cidade,profissão){
    console.log(`Olá, me chamo ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
}

frase2('Jordemar', 34 ,'Rio de Janeiro','Estudande')

//2//

//a//

function somar(num1,num2){
    let soma = num1+num2
    return soma
}

console.log(somar(5,5))

//b//

function verificaMaior(num1,num2){
    let maior = num1 >= num2
    return maior

}

console.log(verificaMaior(10,7))

//c//
function verificaPar(num){
     let par = num % 2 == 0
     return par
 }

 console.log(`Este núemro é par?: ${verificaPar(3)}`)

 //d//

 function mensagem(txt){
     let msg = txt.toUpperCase()
     let tam = txt.length
     return `${msg} tamanho da mensagem: ${tam}`
 }

 console.log(mensagem('Eu estudo na Labenu'))

 //3//

function somarNumero(n1,n2){
    let soma = n1+n2
    return soma
}

function subtraiNumero(n1,n2){
    let subtrai = n1-n2
    return subtrai
}

function multiplicaNumero(n1,n2){
    let multiplica = n1*n2
    return multiplica
}

function divideNumero(n1,n2){
    let divide = n1/n2
    return divide
}
 
 
 let num1 = +prompt('Digite o primeiro número')
 let num2 = +prompt('Digite o segundo número')

s = somarNumero(num1,num2)
sub = subtraiNumero(num1,num2)
m = multiplicaNumero(num1,num2)
d = divideNumero(num1,num2)

console.log(`Numéros inseridos: ${num1} e ${num2}\nSoma: ${s}\nDiferença: ${sub}\nMultiplicação: ${m}\nDivisão: ${d}`)

