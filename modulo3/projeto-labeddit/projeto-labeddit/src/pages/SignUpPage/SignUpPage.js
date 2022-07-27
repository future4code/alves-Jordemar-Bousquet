import React from 'react'
import {ScreenContainer, LogoImage, TitleLab} from './styled'
import SingUpForm from './SingUpForm'
import logo from '../../assets/logo.png'
import useUnprotectedPage from '../../hooks/useUnprotectPage'

function SignUpPage() {
  useUnprotectedPage()

  return (
    <ScreenContainer>
      <LogoImage src ={logo}/>
      <TitleLab>Cadastre-se</TitleLab>
      <SingUpForm/>
      </ScreenContainer>
  )
}

export default SignUpPage