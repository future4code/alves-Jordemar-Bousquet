import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp } from '../../routes/coordinator'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {ToolbarStyled, Logo} from './styled'
import logo from '../../assets/logo.png'


export default function Header() {
    const navigate = useNavigate()


  return (
      <AppBar position="static">
        <ToolbarStyled>
          <Typography variant="h6">
          <Button color="inherit" onClick={() => goToFeed(navigate)}><Logo src={logo}/><strong>LabEddit</strong></Button>
          </Typography>
          <Button color="inherit" onClick={() => goToSignUp(navigate)}>Cadastre-se</Button>
        </ToolbarStyled>
      </AppBar>
  );
}

