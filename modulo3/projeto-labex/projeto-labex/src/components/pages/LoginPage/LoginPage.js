import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBackHome, goToAdminHome } from '../../Routes/coordinator'

const LoginPage = () => {

const navigate = useNavigate()






  return (
    <div>
        <button onClick={() => goBackHome(navigate)}>Voltar</button>
        <h1>Login</h1>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>
        <button onClick={() => goToAdminHome(navigate)}>Entrar</button>
    </div>
  )
}

export default LoginPage