import React, { Component } from 'react'
import TelaCadastro from './components/TelaCadastro'
import TelaListaUsuário from './components/TelaListaUsuário'


export default class App extends Component {
  state = {
    telaAtual:'cadastro'
  }

  EscolheTela = () => {
    switch (this.state.telaAtual){
      case 'cadastro':
        return <TelaCadastro  lista = {this.irParaLista}/>
      case 'lista':
        return <TelaListaUsuário cadastro = {this.irParaCadastro}/>
      default:
        return <div>Erro!!! Página não encontrada </div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual:'cadastro'})
  }

  irParaLista = () => {
    this.setState({telaAtual:'lista'})
  } 

  render() {
    return (
      <div>
      {this.EscolheTela()}
      </div>
    )
  }
}
