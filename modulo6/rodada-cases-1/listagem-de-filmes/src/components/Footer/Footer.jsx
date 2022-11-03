import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    margin:35px;
    justify-content: center;
    text-align: center;
`

const Footer = () => {
  return (
    <Container>&copy; Feito por Jordemar Bousquet</Container>
  )
}

export default Footer