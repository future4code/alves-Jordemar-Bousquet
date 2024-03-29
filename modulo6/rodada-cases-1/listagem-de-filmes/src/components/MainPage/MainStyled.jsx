import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color:#2d0c5d;
padding:40px;


`

export const MainTitle = styled.h1`
  color:white;
  text-align: center;

  font-size:250%;
  padding-bottom: 70px;
  font-family:Arial, Helvetica, sans-serif;
  height: 70px;

`
export const MovieCard = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px 55px 0px 55px;
  
` 

export const MoviePoster = styled.img`
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
