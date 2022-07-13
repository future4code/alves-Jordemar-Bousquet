import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBackHome } from '../../Routes/coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const LoginPage = () => {

const [email,setEmail] = useState('')
const [senha, setSenha] = useState('')

const navigate = useNavigate()

const getEmail = (event) => {
  setEmail(event.target.value)
}

const getSenha = (event) => {
  setSenha(event.target.value)
}

const submitLogin = () => {
  const body ={
      email:email,
      password:senha

  }
  axios.post(`${BASE_URL}/login`,body)
  .then((resp) => {
      localStorage.setItem('token', resp.data.token)
      navigate('/admin/trips/list')

  }).catch((err) =>{
      alert("Email ou Senha Invalido")

  })

}

  return (
    <div>
        <button onClick={() => goBackHome(navigate)}>Voltar</button>
        <h1>Login</h1>
        <input 
        placeholder="E-mail" 
        type ="email"
        value ={email}
        onChange={getEmail}/>
        <input 
        placeholder="Senha"
        type ="password"
        value ={senha}
        onChange={getSenha}/>
        <button onClick={submitLogin}>Entrar</button>
    </div>
  )
}

export default LoginPage