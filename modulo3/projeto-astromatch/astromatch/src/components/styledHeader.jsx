import styled from "styled-components";

export const  ContainerHead = styled.header`
       display:flex;
       justify-content:space-between;
       flex-direction:row-reverse;
       align-items:center;
       font-family: Roboto, sans-serif;
`
export const AstroTag = styled.h3`
        color:#01849e;
    
`
export const MachTag = styled.h3`
        color:rgba(194,31,255,1);
    
`
export const ContainerTitulo = styled.div`
           display:flex;
           position:absolute;
           right: 46%;
`

export const BotaoMatch = styled.button`
            width:70px;
            background-color:white;
            border:none;
            cursor: pointer;
            transition: 0.2s;
            :hover {
            transform:scale(0.8);
  }
    
`
export const BotaoReset = styled.button`
            width:80px;
            background-color:white;
            border:none;
            cursor: pointer;
            transition: 0.2s;
            :hover {
            transform:scale(0.8);
  }
    
`

