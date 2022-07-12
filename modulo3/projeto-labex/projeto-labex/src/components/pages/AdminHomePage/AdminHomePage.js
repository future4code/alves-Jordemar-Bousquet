import React, { Component } from 'react'

export class AdminHomePage extends Component {
  render() {
    return (
      <div>
        <a href='#'>Logout||</a>
        <a href='#'>Criar Viagem</a>
        <div>
          <p>Nome: Mó viajem</p>
          <p>Descrição: Não esqueça a toalha, o anel de pedir carona e o destino final</p>
          <p>Planeta: Netuno</p>
          <p>Duração: 424242424242424242</p>
          <p>Data: 2022-07-21</p>
          <button>Excluir Viagem</button>
        </div>
       
      </div>
    )
  }
}

export default AdminHomePage