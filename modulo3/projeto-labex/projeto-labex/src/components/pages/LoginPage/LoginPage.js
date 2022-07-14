import React, { useState } from 'react'
import useForms from "../../hooks/useForms";
import { useNavigate } from 'react-router-dom'
import { goBackHome } from '../../Routes/coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const LoginPage = () => {

//const [email,setEmail] = useState('')
//const [senha, setSenha] = useState('')

const { form, onChange, cleanFields } = useForms({
    email:'',
    password:''
})

const navigate = useNavigate()

// const getEmail = (event) => {
//   setEmail(event.target.value)
// }

// const getSenha = (event) => {
//   setSenha(event.target.value)
// }

const submitLogin = (event) => {
  event.preventDefault()

  axios.post(`${BASE_URL}/login`,form)
  .then((resp) => {
      localStorage.setItem('token', resp.data.token)
      navigate('/admin/trips/list')
      cleanFields()

  }).catch((err) =>{
      alert("Email ou Senha Invalido")
      cleanFields()

  })

}

  return (
    <div>
      <form  onSubmit={submitLogin}>
        <button onClick={() => goBackHome(navigate)}>Voltar</button>
        <h1>Login</h1>
        <input 
        name ={'email'}
        placeholder="E-mail" 
        type ="email"
        value ={form.email}
        onChange={onChange}
        required/>
        <input
        name ={'password'}
        placeholder="Senha"
        type ="password"
        value ={form.password}
        onChange={onChange}
        required/>
        <button >Entrar</button>
        </form>
    </div>
  )
}

export default LoginPage