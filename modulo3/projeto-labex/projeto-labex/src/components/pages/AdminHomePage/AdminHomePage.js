import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHomePage = () => {

const navigate = useNavigate()

const goToLogout = () =>{
  navigate('/LoginPage')
}

const goTocreateTrip = () =>{
  navigate('/CreateTripPage')
}


  return (
    <div>
      <button onClick={goToLogout}>Logout</button>
        <button onClick={goTocreateTrip}>Criar Viagem</button>
        <div>
          <p>Nome: Mó viajem</p>
          <p>Descrição: Não esqueça a toalha, o anel de pedir carona e o destino final</p>
          <p>Planeta: Netuno</p>
          <p>Duração: 424242424242424242</p>
          <p>Data: 2022-07-21</p>
          <button>Excluir Viagem</button>
        </div>
    </div>
  )
}

export default AdminHomePage