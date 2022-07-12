import React, { Component } from 'react'

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <a href='#'>Voltar</a>
        <h1>Login</h1>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>
        <button>Entrar</button>
      </div>
    )
  }
}

export default LoginPage