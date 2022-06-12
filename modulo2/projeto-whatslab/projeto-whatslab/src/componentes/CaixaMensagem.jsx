import React, { Component } from 'react'
import styled from "styled-components"

export const InputMensagem = styled.input`
        width: 100%;
        padding: 1px 2px;

`;


export default class CaixaMensagem extends Component {

      state = {

        ValorInputMensagem:"",
    }

    onChangeUsuario = (event) => {
      this.setState({ValorInputMensagem: event.target.value,});
      

    };

    

    render() {
      console.log(this.state.ValorInputMensagem)

      return (
        <InputMensagem 
        name ="mensagem"
        onChange={this.onChangeUsuario}
        value={this.state.ValorInputMensagem}
        type="text" 
        placeholder = {this.props.text} />
      )
    }
  }
  