import OrderSummary from "./components/screens/OrderSummary";
import { PizzaMenu } from "./components/screens/PizzaMenu";
import styled from 'styled-components'
import { useState } from "react";


export const ContainerMain = styled.main`
     display:flex;

`

function App() {

  const [cart, setCart] = useState([])

  const addToCard = (pizzaToAdd) => {
      const foundIndex = cart.findIndex((PizzaInCard) =>{
        return PizzaInCard.name === pizzaToAdd.name
      } )

      if(foundIndex >= 0) {
        const newCart = [...cart]
        newCart[foundIndex].quantity += 1


        setCart(newCart)

      } else {
        const newCart = [...cart]
        const newPizza = {
          name: pizzaToAdd.name,
          price: pizzaToAdd.price,
          quantity: 1
        }

        newCart.push(newPizza)

        setCart(newCart)
      }
  }

  return (
    <ContainerMain>
      <PizzaMenu addToCard = { addToCard }/>
      <OrderSummary cart = {cart} />
    </ContainerMain>
  );
}

export default App;
