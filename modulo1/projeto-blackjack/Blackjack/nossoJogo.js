/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


   console.log("Boas vindas ao jogo BlackJack !")
 if(confirm("Boas vindas ao jogo BlackJack !\nQuer iniciar uma nova rodada?")){
      console.log("Vamos lá")
      let usuario = comprarCarta()
      let computador = comprarCarta()
      let valorUsuario = usuario.valor
      let valorComputador = computador.valor
      console.log(`Usuário - cartas: ${usuario.texto} ${valorUsuario}`)
      console.log(`Computador - cartas: ${computador.texto} ${valorComputador}`)
      if(valorUsuario > valorComputador){
         console.log("Jogador venceu!!")
      } else if(valorUsuario < valorComputador){
         console.log("Computador venceu!!")
      } else if(valorUsuario === valorComputador){
         console.log("Empate !!")
      }

 } else {
    console.log("O jogo acabou")
 }
