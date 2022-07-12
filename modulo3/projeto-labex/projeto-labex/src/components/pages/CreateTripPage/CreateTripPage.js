import React, { Component } from 'react'

export class CreateTripPage extends Component {
  render() {
    return (
      <div>
        <a href='#'>Voltar</a>
        ||
        <a href='#'>Logout</a>
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
}

export default CreateTripPage