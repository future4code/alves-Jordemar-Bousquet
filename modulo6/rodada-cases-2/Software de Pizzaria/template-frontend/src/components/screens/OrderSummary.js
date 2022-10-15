import React from 'react'
import OrderIntemCards from '../OrderIntemCards'
import styled from 'styled-components'


export const ContainerSection = styled.section `
  width: 30em;
  border:1px solid black;

  h1{
    font-size: 1.5em;
    text-align: center;
  }

`



const OrderSummary = (props) => {

    const { cart } = props

    const calculateTotal = () =>{
      const total = cart.reduce((acc,item) => acc + item.price * item.quantity, 0)

      return total.toLocaleString(
        "eu-us",
        {style:"currency", currency:"USD"}
      )

    }



  return (
    <ContainerSection>
        <h1>Resumo do pedido</h1>

        {cart.map((pizza) =>{
          return <OrderIntemCards key ={pizza.name} pizza ={pizza} />
        })}

        <h2>Total: {calculateTotal()}</h2>
        <button>Confirmar Pedido</button>
    </ContainerSection>
  )
}

export default OrderSummary