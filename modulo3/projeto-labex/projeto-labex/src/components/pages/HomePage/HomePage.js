import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../../Routes/coordinator'
import Button from '@material-ui/core/Button';
import { theme } from '../../../Theme';
import Grid from '@material-ui/core/Grid';
import { GridContainer, ContainerLoginButton , Titulo , SubTitulo, ButtonStyled, Background} from './StyledHomePage';
import galaxy from '../../Img/galaxy.jpg'



const HomePage = () => {

const navigate = useNavigate()


  return (
    <ThemeProvider theme={theme}>
    <div style={{backgroundImage:`url(${galaxy})`}}
    fullWidith>
      
      <ContainerLoginButton>
    <Button onClick={() => goToLogin(navigate)} style ={{color:'white'}}><img src="https://img.icons8.com/ios-filled/50/FFFFFF/user.png"/> <br/>ADM Login</Button>
      </ContainerLoginButton>
      <GridContainer>
       <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
        
        <Titulo variant="h2" gutterBottom >LabeX</Titulo>
        <SubTitulo variant="h4" gutterBottom>Encontre as Melhores Viagens Espaciais !</SubTitulo>
        <br/>
        <ButtonStyled onClick={() => goToListTrip(navigate)}>Ver Viagens</ButtonStyled>
        </Grid>
        </GridContainer>
        </div>
    </ThemeProvider>
  )
}

export default HomePage