import React from 'react'
import OrderIntemCards from '../OrderIntemCards'
import styled from 'styled-components'


export const ContainerSection = styled.section`
  width: 30em;
  border:1px solid black;

  h1{
    font-size: 1.5em;
    text-align: center;
  }

`



const OrderSummary = (props) => {

  const { cart, removeFromCart, total, confirmOrder } = props



  return (
    <ContainerSection>
      <h1>Resumo do pedido</h1>

      {cart.map((pizza) => {
        return <OrderIntemCards key={pizza.name}
          pizza={pizza}
          removeFromCart={removeFromCart} />
      })}

      <h2>Total:{
        total.toLocaleString(
          "eu-us",
          { style: "currency", currency: "USD" }
        )}</h2>
      <button onClick={confirmOrder}>Confirmar Pedido</button>
    </ContainerSection>
  )
}

export default OrderSummary