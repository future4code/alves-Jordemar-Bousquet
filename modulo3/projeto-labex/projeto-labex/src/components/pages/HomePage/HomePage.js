import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../../Routes/coordinator'
import Button from '@material-ui/core/Button';
import { theme } from '../../../Theme';
import Grid from '@material-ui/core/Grid';
import { GridContainer, ContainerLoginButton , BackgroudImage } from './StyledHomePage';
import Typography from '@material-ui/core/Typography';


const HomePage = () => {

const navigate = useNavigate()


  return (
    <BackgroudImage>
    <ThemeProvider theme={theme}>
      
      
      <ContainerLoginButton>
      <Button color="primary" onClick={() => goToLogin(navigate)}>Login</Button>
      </ContainerLoginButton>
      <GridContainer>
       <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >
        
        <Typography variant="h2" gutterBottom >LabeX</Typography>
        <Typography variant="h4" gutterBottom>Encontre as Melhores Viagens Espaciais !</Typography>
        <br/>
        <Button variant="outlined" color="primary" onClick={() => goToListTrip(navigate)}>Ver Viagens</Button>
        </Grid>
        </GridContainer>
        
    </ThemeProvider>
    </BackgroudImage>
  )
}

export default HomePage