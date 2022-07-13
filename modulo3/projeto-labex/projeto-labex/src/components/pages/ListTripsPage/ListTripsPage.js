import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAplicationForm } from '../../Routes/coordinator'

const ListTripsPage = () => {

const navigate = useNavigate()


  return (
    <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToAplicationForm(navigate)}>Inscerver-se</button>
        <div>
          <p>Nome: Mó viajem</p>
          <p>Descrição: Não esqueça a toalha, o anel de pedir carona e o destino final</p>
          <p>Planeta: Netuno</p>
          <p>Duração: 424242424242424242</p>
          <p>Data: 2022-07-21</p>
        </div>
    </div>
  )
}

export default ListTripsPage