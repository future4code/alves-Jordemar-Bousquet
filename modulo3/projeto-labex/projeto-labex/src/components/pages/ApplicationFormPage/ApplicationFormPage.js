import React, { Component } from 'react'

export class ApplicationFormPage extends Component {
  render() {
    return (
      <div>
        <a href='#'>Voltar</a>
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
}

export default ApplicationFormPage