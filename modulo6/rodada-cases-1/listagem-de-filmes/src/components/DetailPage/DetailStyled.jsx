import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color:#2d0c5d;
padding:50px 0px 104px 525px;

color:white;

`

export const Title = styled.div`
    display: flex;
    margin-top: 13px;
   
`

export const GenderList = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 28px;
    dd{
        display:inline;
        margin: 8px;
        text-decoration:underline;
    }

`

export const Sinopse = styled.p`
    text-align:justify;
    margin:0px 250px 0px 0px ;

`

export const ImgPoster = styled.img`
    position:absolute;
    top:133px;
    margin-left:6%;
    border-radius: 10px;


`

export const CastImage = styled.img`
    margin-top: 55px;
    margin: 8px;
    border: 1px solid black;
    box-shadow:7px 7px 5px rgba(50, 50, 50, 0.77);
    border-radius: 10px;
`
export const CastContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 55px;
    overflow-x: scroll;
    overflow-y: hidden;
    width:92%;
`

export const CastTitle = styled.h2`
    padding-left: 85px;
    padding-top:  85px;
`

export const TrailerContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 75px;
`

export const RecommendationsContainer = styled.div`
  display:flex;
  flex-direction: row;
  text-align: center;
  margin-left: 55px;
  width:92%;
  overflow-x: scroll;
  overflow-y: hidden;
  
`

export const RecommendationsImage = styled.img`
    padding: 15px;
    width: 10em;
    height:17em;
    border-radius: 10px;
    cursor:pointer;
  :hover{
    opacity: 1;
	-webkit-animation: flash 1.5s;
	animation: flash 1.5s;
}
@-webkit-keyframes flash {
	0% {
		opacity: .4;
	}
	100% {
		opacity: 1;
	}
}
@keyframes flash {
	0% {
		opacity: .4;
	}
	100% {
		opacity: 1;
	}
}
    
    
    `

export const RecommendationsTitle = styled.h3`
    margin-left: 55px;
    

`
