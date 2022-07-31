import {BASE_URL} from '../constants/urls'
import {goToFeed} from '../routes/coordinator'
import axios from 'axios'
import Swal from 'sweetalert2'

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
      Swal.fire("Usuário ou Senha incorretos")
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
      Swal.fire("Cadastro realizado com sucesso!!");
      

    })
    .catch((err) =>{
      Swal.fire("Erro,tente novamente")
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
      Swal.fire("O post foi criado! com sucesso");
        cleanFields()
        setIsLoading(false)
        document.location.reload(true)
    }).catch((err)=>{
      Swal.fire('Erro na Postagem:',err.data.response)
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
    Swal.fire("O comentário foi criado! com sucesso");
      cleanFields()
      setIsLoading(false)
      document.location.reload(true)
  }).catch((err)=>{
    Swal.fire('Erro na Postagem:',err.data.response)
  })

}




