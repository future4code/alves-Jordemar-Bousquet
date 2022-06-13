import React, { Component } from 'react'

export default class Etapa1 extends Component {
  render() {
    return (
      <div>
          <h3>ETAPA 1 - DADOS GERAIS</h3>
          <div>
          <p>1.Qual o seu nome?</p>
          <input type="text" />
          </div>
          <div>
          <p>2. Qual sua idade?</p>
          <input type="text" />
          </div>
          <div>
          <p>3. Qual seu email?</p>
          <input type="text" />
          </div>
          <div>
          <p>3. Qual seu email?</p>
            <select>
                <option value="Ensino Medio Incompleto">Ensino Medio Incompleto</option>
                <option value="Ensino Medio Completo">Ensino Medio Completo</option>
                <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                <option value="Ensino Superior Completo">Ensino Supeiror Completo</option>
            </select>
          </div>
          
      </div>
    )
  }
}
