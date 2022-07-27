import {BASE_URL} from '../constants/urls'
import {goToFeed} from '../routes/coordinator'
import axios from 'axios'


export const Login = (body, cleanFields, navigate) =>{
    axios.post(`${BASE_URL}/users/login`,body)
    .then((resp) =>{
      localStorage.setItem('token', resp.data.token)
      cleanFields()
      goToFeed(navigate)

    })
    .catch((err) =>{
      alert('Erro no Login!!')
    })


  }


  export const SignUp = (body, cleanFields, navigate) =>{
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((resp) =>{
      localStorage.setItem('token', resp.data.token)
      cleanFields()
      goToFeed(navigate)

    })
    .catch((err) =>{
      console.log(err)
      alert('Erro no Cadastro!!')
    })


  }