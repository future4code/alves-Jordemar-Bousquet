import React , {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {goToDetailpage} from '../Routes/Coordinator'
import {Container, MainTitle, MovieCard, MoviePoster, InfoContainer} from './MainStyled'
import PaginationRounded from '../../Pagination/Pagination'
import { BASE_URL, IMAGE_URL } from '../constants/urls'
import { APIKEY } from '../constants/key'
import axios from 'axios'

const MainPage = () => {
const navigate = useNavigate()
const [MovieList, SetMovieList] = useState("")


useEffect(() =>{
  getMoviePopular();
},[])



const getMoviePopular = () =>{
  const url = `${BASE_URL}/movie/popular${APIKEY}&language=pt-BR-BR&page=1`

  axios.get(url)
  .then((resp)=>{
    SetMovieList(resp.data.results)
  })
  .catch((err) =>{
    console.log(err)
  })

}

const MovieTitle = MovieList && MovieList.map((movie) =>{

  const poster = movie.poster_path
  const id = movie.id


    return <div key= {id} value = {id}>
      <MoviePoster src = {`${IMAGE_URL}${poster}`} onClick={() => goToDetailpage(navigate,id)}/>
      <InfoContainer>
      <h4>{movie.title}</h4>
      <p style = {{color:"gray"}}>{movie.release_date}</p>
      </InfoContainer>
    </div>
})


  return (
    <div>
    <Container>
      <MainTitle>Milhões de filmes,séries e pessoas<br/>para descobrir. Explore já.</MainTitle>
    </Container>
    <button onClick={() => goToDetailpage(navigate)}></button>
    <MovieCard>
      {MovieTitle}
    <PaginationRounded/>
    </MovieCard>
    </div>
    
  )
}

export default MainPage