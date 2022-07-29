import {BASE_URL} from '../constants/urls'
import {goToFeed} from '../routes/coordinator'
import axios from 'axios'


export const Login = (body, cleanFields, navigate, setRightButtonText) =>{
    axios.post(`${BASE_URL}/users/login`,body)
    .then((resp) =>{
      localStorage.setItem('token', resp.data.token)
      cleanFields()
      goToFeed(navigate)
      setRightButtonText('Logout')

    })
    .catch((err) =>{
      alert("Usuário ou Senha incorretos")
    })


  }


  export const SignUp = (body, cleanFields, navigate, setRightButtonText) =>{
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((resp) =>{
      localStorage.setItem('token', resp.data.token)
      cleanFields()
      goToFeed(navigate)
      setRightButtonText('Logout')
      alert('Cadastro Realizado com Sucesso')

    })
    .catch((err) =>{
      alert(err.response.data)
    })


  }

  export const createPost = (body, clear) =>{
    axios.post(`${BASE_URL}/posts`, body,{
        headers:{
            Authorization:localStorage.getItem('token')
        }
    }).then((resp)=>{
        alert('Postagem realizada com Sucesso')
        clear()
        document.location.reload(true)
    }).catch((err)=>{
        alert('Erro na Postagem:',err.data.response)
    })

}
