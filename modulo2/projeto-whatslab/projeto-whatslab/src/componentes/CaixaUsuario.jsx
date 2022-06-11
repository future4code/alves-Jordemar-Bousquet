import React, { Component } from 'react'
import styled from "styled-components"


export const InputUsuario = styled.input`
        width: 22.1%;
        padding: 1px 2px;


`;


export default class CaixaUsuario extends Component {
  render() {
    return (
    <InputUsuario type="text" placeholder = {this.props.text} />
    )
  }
}
