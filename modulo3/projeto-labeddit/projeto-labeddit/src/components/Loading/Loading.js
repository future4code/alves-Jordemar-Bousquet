import React from 'react'
import{LoadingContainer} from './styled'
import CircularProgress from '@material-ui/core/CircularProgress'

function Loading() {
  return (
    <LoadingContainer>
        <CircularProgress/>
    </LoadingContainer>
  )
}

export default Loading