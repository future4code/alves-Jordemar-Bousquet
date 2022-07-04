import axios from 'axios'
import React, { Component } from 'react'

export default class TelaCadastro extends Component {
      state ={
        nome:"",
        email:""
      }

      handleNome = (e) => {
        this.setState({nome:e.target.value})
      }


      handleEmail = (e) => {
        this.setState({email:e.target.value})
      }

      fazerCadastro = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body = {
         name:this.state.nome,
         email:this.state.email
       }

       axios.post(url, body, {
          headers:{
              Authorization:"jordemar-bousquet-alves"
          }
       })
       .then((resposta) => {
        alert("Usuário Cadastrado com Sucesso")
        this.setState({nome:"", email:""})
       })
       .catch((erro) => {
        alert(erro.response.data.message)
       })

      }


  render() {
    return (
      <div>
           <button onClick = {this.props.lista}>Ir para a Lista de Usuários</button>
            <h2>Cadastro</h2>
            <input 
            value ={this.state.nome}
            onChange = {this.handleNome}
            placeholder={'Nome'}/>
            <input 
            value = {this.state.email}
            onChange ={this.handleEmail}
            placeholder={'Email'}/>
            <button onClick={this.fazerCadastro}>Cadastrar</button>
      </div>
    )
  }
}
