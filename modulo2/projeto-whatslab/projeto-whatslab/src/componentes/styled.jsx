
import styled from 'styled-components'


export const globalState = GlobalState`
*{
    box-sizing: border-box;
  }

`

export const EstiloPrincipal = styled.div`
    display: flex;
    justify-content: center;

`

export const EstiloSecundario = styled.div`
     max-width: 600px;
    height: 100vh;
    border: 1px solid black;
    flex: 1 1 0%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;


`
