import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTripPage = () => {

const navigate = useNavigate()

const goBack = () =>{
    navigate(-1)
  }

const goToLogout = () =>{
    navigate('/LoginPage')
  }


  return (
    <div>
      <button onClick={goBack}>Voltar</button>
        <button onClick={goToLogout}>Logout</button>
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