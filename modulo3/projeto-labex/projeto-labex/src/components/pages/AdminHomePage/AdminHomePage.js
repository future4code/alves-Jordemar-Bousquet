import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToTripDetails, goToLogout, goTocreateTrip } from '../../Routes/coordinator'

const AdminHomePage = () => {

const navigate = useNavigate()

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