import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/coordinator'

const ApplicationFormPage = () => {
  const navigate = useNavigate()


  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
        <h3>Inscreva se para uma Viagem</h3>
        <div>
          <form>
            <select>
              <option>Escolha uma Viagem</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <input placeholder='Nome'></input>
            <input placeholder='Idade'></input>
            <input placeholder='Texto da Candidatura'></input>
            <input placeholder='Profissão'></input>

            <select>
              <option>Escolha um País</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </form>
        </div>
        <button>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage