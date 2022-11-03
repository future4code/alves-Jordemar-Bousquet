import React from 'react'
import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

export const LoadingContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;   

`

const Loading = () => {
  return (
    <LoadingContainer>
        <CircularProgress/>
    </LoadingContainer>
  )
}

export default Loading