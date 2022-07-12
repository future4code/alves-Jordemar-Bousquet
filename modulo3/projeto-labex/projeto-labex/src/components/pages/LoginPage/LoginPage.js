import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

const navigate = useNavigate()

const goBackHome = () =>{
    navigate('/')
  }

  const goToAdminHome = () =>{
    navigate('/AdminHomePage')
  }




  return (
    <div>
        <button onClick={goBackHome}>Voltar</button>
        <h1>Login</h1>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>
        <button onClick={goToAdminHome}>Entrar</button>
    </div>
  )
}

export default LoginPage