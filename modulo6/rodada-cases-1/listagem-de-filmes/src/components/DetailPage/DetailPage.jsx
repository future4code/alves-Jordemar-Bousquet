import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToMainPage} from '../Routes/Coordinator'
import {Container} from './DetailStyled'

const DetailPage = () => {

const navigate = useNavigate()


  return (
    <div>
      <Container>
      <h2>DetailPage</h2>
      </Container>
      <button onClick={() => goToMainPage(navigate)}>Pagina Principal</button>

    </div>
  )
}

export default DetailPage