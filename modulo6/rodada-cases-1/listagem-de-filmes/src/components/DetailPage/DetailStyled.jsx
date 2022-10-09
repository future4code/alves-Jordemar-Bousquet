import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color:#2d0c5d;
padding:50px 0px 150px 525px;

color:white;

`


export const Title = styled.div`
    display: flex;
    margin-top: 13px;
   
`

export const GenderList = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 120px;
`

export const Sinopse = styled.p`
    text-align:justify;
    margin:0px 250px 0px 0px ;

`

export const ImgPoster = styled.img`
    position:absolute;
    top:133px;
    margin-left:6%;


`

export const CastImage = styled.img`
    margin-top: 55px;
    margin: 8px;
    border: 1px solid black;
    box-shadow:7px 7px 5px rgba(50, 50, 50, 0.77);

   
`
export const CastContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 55px;
    width:100%;
    overflow-x: scroll;
    overflow-y: hidden;
`

export const CastTitle = styled.h2`
    padding-left: 85px;
    padding-top:  85px;
`

export const TrailerContainer = styled.div`
    margin-left: 55px;
`

export const RecommendationsContainer = styled.div`
  display:flex;
  flex-direction: row;
  margin-left: 55px;
  width:100%;
  overflow-x: scroll;
  overflow-y: hidden;

`

export const RecommendationsImage = styled.img`
    padding: 5px;
    
    `

export const RecommendationsTitle = styled.h3`
    margin-left: 55px;

`
