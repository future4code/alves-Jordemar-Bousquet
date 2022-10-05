import React , {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {goToDetailpage} from '../Routes/Coordinator'
import {Container, MainTitle} from './MainStyled'
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
  const url = `${BASE_URL}/movie/popular${APIKEY}`

  axios.get(url)
  .then((resp)=>{
    SetMovieList(resp.data.results)
  })
  .catch((err) =>{
    console.log(err)
  })

}

console.log(MovieList)

const MovieTitle = MovieList && MovieList.map((movie) =>{

  const poster = movie.poster_path

    return <div>
      <h4>{movie.title}</h4>
      <img src = {`${IMAGE_URL}${poster}`} style = {{width:"250px"}}/>
      <p>{movie.release_date}</p>
    </div>
})


  return (
    <div>
    <Container>
      <MainTitle>Milhões de filmes,séries e pessoas<br/>para descobrir. Explore já.</MainTitle>
    </Container>
    <button onClick={() => goToDetailpage(navigate)}>Detalhes</button>
    <h1>
      {MovieTitle}
    </h1>
    </div>
    
  )
}

export default MainPage