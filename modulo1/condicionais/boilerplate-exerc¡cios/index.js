// Exercícios de interpretação de código //

// 1 a. O codigo realiza um testa para informar se um número é divisível por 2 ou não b. números divisíveis por 2 c. númeors que não são divisíveis por 2 //

//2 a.para imprimir o preço da fruta escolhida pelo usuário b.O preço da maça é R$ 2.25 c.O preço da fruta pêra é R$ 5//

// 3 a.A primeira lihna pede um número para o usuário que será guardada na  variável numpero b. Otdas as alternativas darão erro no console c.Sim , a variável "mensagem" foi declarada dentro do escopo do "if" e não pode ser impresa fora do escopo do mesmo , somente se a condicao der verdadeira e a impressão estiver dentro do escopo do "if".// 



 // Exercícios de escrita de código // 
 //1//

 let idade = +prompt("Digite a sua idade")
    if(idade > 18){
        console.log("Você já pode Dirigir!!")

    } else{
        console.log("Você ainda não pode Dirigir!!")
    } 

    //2//

    let turno = prompt("Em qual turno que você estuda? [M,V ou N]").toLowerCase()
    if (turno == "m"){
        console.log("Bom Dia !!")
    } else if (turno == "v"){
        console.log("Boa Tarde !!")
    } else {
        console.log("Boa Noite !!")
    }

    // 3 // 
        switch(turno){
            case "m":
                console.log("Bom dia!!")
                break
            
            case "v":
                console.log("Boa Tarde!!")
                break

            case "n":
                console.log("Boa noite")
                break

            default:
                console.log("Insira o turno em que você estuda!!")
        }

        // 4 e Desafio 1 //

        let generoFilme = prompt("Qual o genero do filme que irão assistir?").toLowerCase()
        let precoIngresso = +prompt("Qual o valor do ingresso?")
        


        if ((generoFilme == "fantasia" && precoIngresso <= 15)) {
            let lanche =  prompt("Qual snack que você quer comprar?")

            console.log(`Bom Filme !!!\nAproveite o seu ${lanche}!!`)
        } else {
            console.log("Escolha outro filme")
        } 

       // Desafio 2 // 

       let comprador ={ 
           nome:prompt("Digite seu nome"),
           tipo: prompt("Qual o tipo de jogo? [IN ou DO]").toUpperCase(),
           etapa: prompt("Qual a etapa do jogo? [SF,DT ou FI]").toUpperCase(),
           categoria: +prompt("Qual categoria?"),
           quantIgresso: +prompt("Qual a quantidade de ingressos?")

       }

       if(comprador.tipo ==="IN"){
           comprador.tipo = "Internacional"
        } else if(comprador.tipo === "DO") {
            comprador.tipo = "Nacional"
        }

        if(comprador.etapa === "SF"){
            comprador.etapa = "Semi-Final"
        }else if(comprador.etapa === "DT"){
            comprador.etapa = "Decisão Terceiro Lugar"
        }else if(comprador.etapa === "FI"){
            comprador.etapa = "Final"
        }

       console.log(`--Dados da Compra--`)
       console.log(`Nome do Cliente: ${comprador.nome}\nTipo de jogo: ${comprador.tipo}\nEtapa do Jogo: ${comprador.etapa}\nCategoria do Jogo: ${comprador.categoria}\nQuantidade de Ingresso: ${comprador.quantIgresso}`)


       