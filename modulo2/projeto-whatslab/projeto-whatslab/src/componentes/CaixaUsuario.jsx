import React, { Component } from 'react'
import styled from "styled-components"


export const InputUsuario = styled.input`
        width: 22.1%;
        padding: 1px 2px;


`;


export default class CaixaUsuario extends Component {
    state = {

        ValorInputUsuario:"",
    }

    onChangeUsuario = (event) => {
        this.setState({ValorInputUsuario: event.target.value,});
      
    
    };


  render()
  {
    console.log(this.state.ValorInputUsuario)

    return (
      
    <InputUsuario
    name="usuario"
    type="text"
    onChange={this.onChangeUsuario} 
    value={this.state.ValorInputUsuario}
    placeholder = {this.props.text} />
    )
  }
}
