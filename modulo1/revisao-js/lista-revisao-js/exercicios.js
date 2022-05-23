// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const ordena = array.sort((a,b) => a - b)
    return ordena
   
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter((item)=> item % 2 == 0)
    return pares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = array.filter((item)=> item % 2 == 0)
    const paresElevados2 = pares.map((par) => par ** 2)
    return paresElevados2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null,array)
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const obj = {maiorNumero: 0,
                 maiorDivisivelPorMenor:'false',
                 diferenca: 0}

    if(num1>num2){
    obj.maiorNumero = num1
    obj.maiorDivisivelPorMenor = num1 % num2 == 0
    obj.diferenca = num1 - num2
    } else if(num2>num1){
    obj.maiorNumero = num2
    obj.maiorDivisivelPorMenor = num2 % num1 == 0
    obj.diferenca = num2 - num1
    }

    return obj


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n){
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if((ladoA === ladoB === ladoC)){
        return "Equilátero"
    } else if ((ladoA === ladoB) || (ladoB === ladoC) || (ladoA == ladoC)){
        return "Isóceles"
    } else if(ladoA != ladoB != ladoC) {
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const ordena = array.sort((a,b) => a - b)
    const maioreMenor = ordena.map((item) => {
        ordena[1]
        return maioreMenor
    })
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assitir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    objPessoa = 
    { ...pessoa,
        nome:'ANÔNIMO'
    }
   return objPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas){
      
}   


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}