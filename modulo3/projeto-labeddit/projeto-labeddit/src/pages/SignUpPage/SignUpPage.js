import React from 'react'
import {ScreenContainer, LogoImage, TitleLab} from './styled'
import SingUpForm from './SingUpForm'
import logo from '../../assets/logo.png'
import useUnprotectedPage from '../../hooks/useUnprotectPage'

function SignUpPage({setRightButtonText}) {
  useUnprotectedPage()

  return (
    <ScreenContainer>
      <LogoImage src ={logo}/>
      <TitleLab>Olá,Boas Vindas ao LabEddit ;)</TitleLab>
      <SingUpForm setRightButtonText={setRightButtonText}/>
      </ScreenContainer>
  )
}

export default SignUpPage