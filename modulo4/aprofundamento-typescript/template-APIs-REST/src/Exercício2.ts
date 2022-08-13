// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses 
//Resposta - Entrada ao números e saida ao operações

//b. Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript.

function obterEstatisticas(numeros:any) {

    const numerosOrdenados:any = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number,
        menor:number,
        media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


//c// 
type amostraDeIdades = {

    numeros:number[],

    obterEstatisticas: {
        maior:number,
        menor:number,
        media:number
    }
}