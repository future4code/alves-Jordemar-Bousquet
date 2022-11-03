import React from 'react'
import {HeaderContainer, HeaderTitle, Element} from './HeaderStyled'
import { useNavigate } from 'react-router-dom'
import {goToHomePage} from "../Routes/Coordinator"

const Header = () => {
const navigate = useNavigate()

  return (
    <HeaderContainer>
        <HeaderTitle onClick= {() => goToHomePage(navigate)}>TMDB</HeaderTitle>
        <Element/>
    </HeaderContainer>
  )
}

export default Header