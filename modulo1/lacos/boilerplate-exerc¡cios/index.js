// Exercícios de interpretação de código // 
//1.Enquanto "i" for menor que 5 ele recebe mais um valor que é somado na variável "valor" então resultado impresso no console será 10 // 
//2. o codigo imprime apenas os números maiores que 18 dentro da lista. Sim, usando o metodo lenght -1 //
// 3 Seria impresso no console 4 linhas com 4 asteríscos ///

// Exercícios de escrita de código // 

//1//

/*let quantidadePet = +prompt("Quantos bichos de estimação você tem?")
let nomesPetArray = []

if(quantidadePet == 0){
    console.log("Que pena, você pode adotar um pet !!")
} else {
    let contador = 0 
    while(contador < quantidadePet) {
        let nomePet = prompt(`Digite o nome de seu ${contador + 1}º pet`)
        nomesPetArray.push(nomePet) 
        contador ++
    }
}
console.log(nomesPetArray)*/

//2//

 //a//
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function valoresArrayOriginal(valores){
for (let numeros of valores){
    console.log(numeros)
}
}
// valoresArrayOriginal(arrayOriginal)

//b//
function valoresArrayDividos(valores){
    for (let numeros of valores){
        console.log(numeros / 10)
}
    }

//valoresArrayDividos(arrayOriginal)

//c//

function valoresArrayPares(valores){
    for (let numeros of valores){
        pares = []
        if (numeros % 2 == 0){
            pares.push(numeros)
            console.log(pares)
        }
        
    } 
    
}
//valoresArrayPares(arrayOriginal)


