import React from 'react'
import{ErrorPageContainer, ErrorImage} from './styled'
import erro from '../../assets/erro.jpg'
import { Typography } from '@material-ui/core'

function ErrorPage() {
  return (
    <ErrorPageContainer>
      <ErrorImage src = {erro}/>
      <Typography color ={"primary"} variant ={'h4'} align={'center'}>Erro 404 - Página não encontrada</Typography>
      </ErrorPageContainer>
  )
}

export default ErrorPage