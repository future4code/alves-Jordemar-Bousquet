import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { goToTripDetails, goToLogout, goTocreateTrip } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

const AdminHomePage = () => {

const navigate = useNavigate()

const token = localStorage.getItem('token')

useEffect(() => {
  axios.get(`${BASE_URL}/trip/C86run9BAkD4LLw4bspV`,{
    headers:{
      auth:token
    }
  })
  .then((resp) =>{
      console.log("deu certo:",resp.data.trip)

  })
  .catch((err) => {
    console.log("deu erro:",err.response)
  })

},[])

  return (
    <div>
      <button onClick={() => goToLogout(navigate)}>Logout</button>
        <button onClick={() => goTocreateTrip(navigate)}>Criar Viagem</button>
        <div>
          <p>Nome: Mó viajem</p>
          <p>Descrição: Não esqueça a toalha, o anel de pedir carona e o destino final</p>
          <p>Planeta: Netuno</p>
          <p>Duração: 424242424242424242</p>
          <p>Data: 2022-07-21</p>
          <button>Excluir Viagem</button>
          <button onClick ={() => goToTripDetails(navigate)}>Detalhes</button>
        </div>
    </div>
  )
}

export default AdminHomePage