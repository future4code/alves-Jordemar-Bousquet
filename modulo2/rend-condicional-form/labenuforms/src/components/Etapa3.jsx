import React, { Component } from 'react'

export default class Etapa3 extends Component {
  render() {
    return (
      <div>
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
          <div>
              <p>5. Por que você não terminou um curso de graduação?</p>
              <input type="text" />
          </div>
          <div>
              <p>6. Você fez algum curso complementar?</p>
             <select >
                 <option value="Nenhum">Nenhum</option>
                 <option value="Curso Tecnico">Curso Tecnico</option>
                 <option value="Curso de Inglês">Curso de Inglês</option>
             </select>
          </div>
      </div>
    )
  }
}
