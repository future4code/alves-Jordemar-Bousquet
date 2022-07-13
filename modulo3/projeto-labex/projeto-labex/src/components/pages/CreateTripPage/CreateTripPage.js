import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack , goToLogout  } from '../../Routes/coordinator'

const CreateTripPage = () => {

const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToLogout(navigate)}>Logout</button>
        <div>
        <h3>Criar Viagem</h3>
        <forms>
        <input placeholder='Nome'></input>
        <select>
          <option>Escolha um Planeta</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>3</option>
        </select>
        <input type ='date'></input>
        <input placeholder='Descrição'></input>
        <input placeholder='Duração em dias' type = 'number'></input>
        </forms>
        </div>
        <button>Criar</button>
    </div>
  )
}

export default CreateTripPage