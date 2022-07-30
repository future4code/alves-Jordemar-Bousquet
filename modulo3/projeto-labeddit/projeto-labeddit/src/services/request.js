import {BASE_URL} from '../constants/urls'
import {goToFeed} from '../routes/coordinator'
import axios from 'axios'


export const Login = (body, cleanFields, navigate, setRightButtonText, setIsLoading) =>{
  setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`,body)
    .then((resp) =>{
      localStorage.setItem('token', resp.data.token)
      cleanFields()
      setIsLoading(false)
      goToFeed(navigate)
      setRightButtonText('Logout')
      

    })
    .catch((err) =>{
      alert("Usuário ou Senha incorretos")
      setIsLoading(false)
    })


  }


  export const SignUp = (body, cleanFields, navigate, setRightButtonText, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((resp) =>{
      localStorage.setItem('token', resp.data.token)
      cleanFields()
      setIsLoading(false)
      goToFeed(navigate)
      setRightButtonText('Logout')
      alert('Cadastro Realizado com Sucesso')
      

    })
    .catch((err) =>{
      alert("Erro,tente novamente")
      setIsLoading(false)
    })


  }

  export const createPost = (body, cleanFields, setIsLoading) =>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body,{
        headers:{
            Authorization:localStorage.getItem('token')
        }
    }).then((resp)=>{
        alert('Postagem realizada com Sucesso')
        cleanFields()
        setIsLoading(false)
        document.location.reload(true)
    }).catch((err)=>{
        alert('Erro na Postagem:',err.data.response)
        setIsLoading(false)
    })

}


export const createComment = (id, body, cleanFields, setIsLoading) =>{
  setIsLoading(true)
  axios.post(`${BASE_URL}/posts/${id}/comments`, body,{
      headers:{
          Authorization:localStorage.getItem('token')
      }
  }).then((resp)=>{
      alert('Comentário Adicionado')
      cleanFields()
      setIsLoading(false)
      document.location.reload(true)
  }).catch((err)=>{
      alert('Erro na Postagem:',err.data.response)
  })

}




