import React from 'react'
import styled from 'styled-components'


export const ContainerLi = styled.li `
    display:flex;

`

const OrderIntemCards = (props) => {
  const {pizza} = props


  return (
    <ContainerLi>
        <h3>
          Pizza {pizza.name} - {pizza.price.toLocaleString(
        "eu-us",
        {style:"currency", currency:"USD"}
      )} x {pizza.quantity}</h3>
        <button>Remover Item</button>
    </ContainerLi>
  )
}

export default OrderIntemCards