import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;

`



export default class TelaListaUsuário extends Component {


state = {
  usuarios :[]
}


    componentDidMount(){
      this.pegarUsuarios()
    }


    pegarUsuarios = async () => {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

     /* axios.get(url,{
        headers:{
          Authorization:"jordemar-bousquet-alves"
        }
      }).then((resposta)=>{
        this.setState({usuarios:resposta.data})
      })
        .catch((erro)=>{
          alert('Erro!! Tente Novamente')
        })

    }*/

    try {

      const resposta = await axios.get(url,{
        headers:{
          Authorization:"jordemar-bousquet-alves"
        }
      })
      this.setState({usuarios:resposta.data})


    } catch (erro){
      alert('Erro!! Tente Novamente')
    }}



    deletarUsuario = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

      axios.delete(url,{
        headers:{
          Authorization:"jordemar-bousquet-alves"
        }
      }).then((resposta) => {
        alert('Usuário Deletado com Sucesso')
        this.pegarUsuarios()
      })
        .catch((erro) => {
          alert('Erro!! Tente Novamente')
        })

    }


  render(){

    const ListaDeUsuarios = this.state.usuarios.map((user) =>{
        return <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deletarUsuario(user.id)}>X</button>
          </CardUsuario>
    })

    return (
      <div>
        <button onClick={this.props.cadastro}>Ir para Cadastro</button>
        <h2>Lista de Usuários</h2>
        {ListaDeUsuarios}
      </div>
    )
  }
}
