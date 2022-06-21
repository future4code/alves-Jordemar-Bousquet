import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  state = {
    usuario:'',
    email:'',
    erro:''
  }


 body = {
    nome:this.state.usuario,
    email:this.state.email
  }

  pegaNome = (event) => {
    this.setState({usuario: event.target.value})
    


  }

  pegaEmail = (event) => {
    this.setState({email: event.target.value})
    


  }


  componentDidMount(){
    this.CriarUsuario()
  }

CriarUsuario = () =>{
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,this.body,{
    headers: {
      ///Authorization: 'jordemar-bousquet-alves'
    }
  }).then((resposta)=>{
    this.setState({usuario:resposta.data.result.list})
  }).catch((error) =>{

      this.setState({erro:error.resposta.data.message})
  })
}


  render() {
    return (
      <main>
        <button>Troca de Tela</button>
        <br/>
        <input
        onChange={this.pegaNome}
        placeholder='Nome'/>
        <input
         onChange={this.pegaEmail}
         placeholder='E-mail'/>
        <button onClick={this.CriarUsuario}>Criar Usuário</button>
        {this.state.erro ? 
        <p>{this.state.erro}</p> : 
        <p>Cadastro Realizado</p>
        }
      </main>
    )
  }
}
