import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'
import { Button } from "@material-ui/core"
import { ScreenContainer, LogoImage, TitleLab, SubTitleLab } from './styled'
import LoginForm from './LoginForm'
import logo from '../../assets/logo.png'


function LoginPage() {
  const navigate = useNavigate()
 
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <TitleLab>LabEddit</TitleLab>
      <SubTitleLab>O Projeto Rede Social da Labenu</SubTitleLab>
      <LoginForm/>
      <Button variant="text" color="primary" onClick={() => goToSignUp(navigate)}>Não possui uma conta? Cadastre-se</Button>
    </ScreenContainer>
  )
}

export default LoginPage