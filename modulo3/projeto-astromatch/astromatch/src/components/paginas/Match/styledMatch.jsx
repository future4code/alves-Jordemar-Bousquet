import styled from "styled-components";



export const ContainerMatch = styled.div`
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            align-content:center;
            font-family: Roboto, sans-serif;
          
    
`

export const ContainerCard = styled.div`
            display:flex;
            margin:10px;
            cursor: pointer;
            :hover{
                opacity : 0.5;
                
            }

`


export const ImgMatch = styled.img`
        border: 2px solid black;
        border-radius:50%;
        width: 65px;
        height: 65px;
        

`

export const MatchNome =styled.p`
        padding-left:20px;
        text-align:center;
        font-weight:bold;


`

export const MatchBio =styled.p`
        font-style:italic;
        text-decoration:underline;

`