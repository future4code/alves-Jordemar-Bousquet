import React from 'react'
import styled from 'styled-components'

export const ContainerLI = styled.li `
    border: 1px solid black;
    margin:1em;
    
    display:flex;
    flex-direction: column;
    justify-content: space-between;

    h3,
     .cardPrice {

        text-align: center;
    }


`
export const PizzaCard = (props) => {

    const { pizza, addToCard } = props

    return (
        <ContainerLI>
            <h3>{pizza.name}</h3>
            <p className='cardPrice'>US$ {pizza.price.toFixed(2)}</p>
            <p>
                {pizza.ingredients.map((item) => {
                    return (
                        <span key={item}>{`${item} `}</span>
                    )
                })}
            </p>
            <button onClick={() => addToCard(pizza)}>Adicionar ao carrinho</button>
        </ContainerLI>
    )
}
