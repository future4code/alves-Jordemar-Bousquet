import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToLogout } from '../../Routes/coordinator'

const TripDetailsPage = () => {

const navigate = useNavigate()


  return (
    <div>
       <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToLogout(navigate)}>Logout</button>
        <div>
        <h1>Grande Prioridade</h1>
        <p>Nome: Grande Prioridade</p>
        <p>Descrição: Grande Prioridade Grande Prioridade</p>
        <p>Planeta: Mercúrio</p>
        <p>Duração: 1000</p>
        <p>Data: 2022-07-22</p>
        </div>

        <div>
          <h3>Candidatos Pendentes</h3>
          <p>Nome:</p>
          <p>Idade:</p>
          <p>Profissão:</p>
          <p>País:</p>
          <p>Texto da Candidadtura: </p>
        </div>

        <div>
        <h3>Candidatos Aporvados</h3>
        <ul>
          <li>Eu</li>
          <li>Tu</li>
          <li>Ele/Ela</li>
        </ul>

        </div>
    </div>
  )
}

export default TripDetailsPage