// Exercícios de interpretação de código //
// 1. O nome e o apelido de cada item dentro do array,o indice de cada item dentro do array e o array completo 2. Um array apenas com os nomes dos itens do array original 3.Um array com todos os apelidos diferentes de "Chijo" ddentro do array original // 

// Exercícios de escrita de código //

//1//

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a//

const arrayNomeDog = pets.map((nomeDogs) => {
     return nomeDogs.nome

})
console.log(arrayNomeDog)

//b//

const arraySalsicha = pets.filter((nomeDogs) => {
    if (nomeDogs.raca === "Salsicha")
    return nomeDogs

})
console.log(arraySalsicha)

//c//

const arrayPoodle = pets.filter((nomeDogs) => {
    if(nomeDogs.raca === "Poodle")
    return nomeDogs
})

const arrayDesconto = arrayPoodle.map((nomePoodle) => {
    return `Você ganhou 10% de desconto para tosar o/a ${nomePoodle.nome}!!`

})
console.log(arrayDesconto)

//2//

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a//

const arrayNomeItem = produtos.map((item) => {
     return item.nome
})
//console.log(arrayNomeItem)

//b//

const arrayPreço = produtos.map((item) =>{
    objNomePreco = {}
    objNomePreco.nome = item.nome
    const novoPreco = item.preco - (item.preco * 5 / 100)
    objNomePreco.preco = novoPreco.toFixed(2)
    return objNomePreco
    

})
  console.log(arrayPreço)

// c //

const arrayBebidas = produtos.filter((item) => {
        objBebidas = {}
        if(item.categoria === "Bebidas"){
            objBebidas.nome = item.nome
            objBebidas.categoria = item.categoria
            return objBebidas
            }
            
        }) 

    console.log(arrayBebidas)

   // d //
const arrayYpe = produtos.filter((item) => {
        objYpe = {}
        if(item.nome.includes("Ypê")){
        objYpe.nome = item.nome
        return objYpe
        }
}) 
     console.log(arrayYpe)

    // e //
    const arrayCompreYpe = arrayYpe.map((item) => {
        return `Compre ${item.nome} por ${item.preco}`

    })
    console.log(arrayCompreYpe)