import styled from "styled-components";

export const ContainerPerfil = styled.div`
        text-align: center;


`

export const ImagemPerfil = styled.img`
    width:350px;
    height:350px;
    border-radius:10px;
    box-shadow:0 5px 10px 0 rgba(0,20,20,0.5);


`

export const ContainerTitulo = styled.div`
        position: relative;
        bottom:21px;
        left:39%;
        text-align:left;
        font-size:larger;
        font-weight:bolder;
        color:black;
`

export const ContainerDescricao = styled.div`
            position: relative;
            text-align:left;
            padding-left:37%;
            padding-right:34%;
            bottom:32px;
            color:black;
            font-size:large;
            
`


export const Botao = styled.button`
        border-radius:50px;
        background-color:white;
        margin:-40px 30px 0px 30px;
        cursor: pointer;
            transition: 0.2s;
            :hover {
            transform:scale(0.8);
            }

`

