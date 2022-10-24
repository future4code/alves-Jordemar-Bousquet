import React from 'react'
import styled from "styled-components"
import pizzalogo from '../assents/pizzalogo.png'


const ContarinerFooter = styled.ul `  
   display: flex;
	text-align: center;
    flex-direction: row;
    padding:95px;
    p{
        text-align: center;
    };

    img{
        width: 50px;
    }

`



const Footer = () => {
  return (
    <ContarinerFooter>

        <li>
            <p>&copy;Family of "Pizza Classic" restaurants. All rights reserved!</p>
        </li>
        <li>
            
            <img src ={pizzalogo}/>
            <h3>Pizza Classic</h3>

        </li>
        <li>
            <p> Made with delight by <strong>harmuder</strong></p>
        </li>
        
    </ContarinerFooter>
  )
}

export default Footer