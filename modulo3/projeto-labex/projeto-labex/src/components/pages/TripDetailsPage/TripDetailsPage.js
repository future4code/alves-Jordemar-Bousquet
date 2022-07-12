import React, { Component } from 'react'

export class TripDetailsPage extends Component {
  render() {
    return (
      <div>
        <a href='#'>Voltar</a>
        ||
        <a href='#'>Logout</a>
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
}

export default TripDetailsPage