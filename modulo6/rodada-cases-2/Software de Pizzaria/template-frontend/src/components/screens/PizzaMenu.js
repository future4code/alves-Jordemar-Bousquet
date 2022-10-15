import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PizzaCard } from '../PizzaCard'
import {BASE_URL} from '../../constants/urls'
import styled from 'styled-components'


export const StyledSection = styled.section`
    ul{
        display:flex;
    }  
    
`
export const PizzaMenu = (props) => {

  const {addToCard} = props

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
      axios.get(`${BASE_URL}/pizzas`)
        .then((res) => {
          setPizzas(res.data.pizzas)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])

  return (
    <StyledSection>
    <ul>
      {pizzas.map((pizza) => {
        return (
         <PizzaCard 
         pizza ={pizza} 
         key ={pizza.name}
         addToCard = {addToCard}
         />
        )
      })}
    </ul>
  </StyledSection>
)}
