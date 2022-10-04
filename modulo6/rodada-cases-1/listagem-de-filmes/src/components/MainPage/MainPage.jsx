import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToDetailpage} from '../Routes/Coordinator'
import {Container, MainTitle} from './MainStyled'

const MainPage = () => {

const navigate = useNavigate()


  return (
    <div>
    <Container>
      <MainTitle>Milhões de filmes,séries e pessoas<br/>para descobrir. Explore já.</MainTitle>
    </Container>
    <button onClick={() => goToDetailpage(navigate)}>Detalhes</button>
    <h1>
      fimles
    </h1>
    </div>
    
  )
}

export default MainPage