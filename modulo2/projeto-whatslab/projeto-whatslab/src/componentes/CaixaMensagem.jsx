import React, { Component } from 'react'
import styled from "styled-components"

export const InputMensagem = styled.input`
        width: 100%;
        padding: 1px 2px;

`;


export default class CaixaMensagem extends Component {
    render() {
      return (
        <InputMensagem type="text" placeholder = {this.props.text} />
      )
    }
  }
  