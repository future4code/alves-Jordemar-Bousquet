import React , {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {goToDetailpage} from '../Routes/Coordinator'
import {Container, MainTitle, MovieCard, MoviePoster, InfoContainer, ContainerPagination} from './MainStyled'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BASE_URL, IMAGE_URL } from '../constants/urls'
import { APIKEY } from '../constants/key'
import Loading from '../Loading';
import axios from 'axios'
import moment from "moment"

const MainPage = () => {
const navigate = useNavigate()
const [MovieList, SetMovieList] = useState("")
const [page, setPage] = useState(1)


useEffect(() =>{
  getMoviePopular();
},[page])



const getMoviePopular = () =>{
  const url = `${BASE_URL}/movie/popular${APIKEY}&language=pt-BR&page=${page}`

  axios.get(url)
  .then((resp)=>{
    SetMovieList(resp.data.results)
  })
  .catch((err) =>{
    console.log(err)
  })

}

const MovieInfo = MovieList && MovieList.map((movie) =>{

  const poster = movie.poster_path
  const id = movie.id


    return <div key= {id} value = {id}>
      <MoviePoster src = {`${IMAGE_URL}${poster}`} onClick={() => goToDetailpage(navigate,id)}/>
      <InfoContainer>
      <h4>{movie.title}</h4>
      <p style = {{color:"gray"}}>{moment(movie.release_date).format('DD/MM/YYYY')}</p>
      </InfoContainer>
    </div>
})


  return (
    <div>
    <Container>
      <MainTitle>Milhões de filmes,séries e pessoas<br/>para descobrir. Explore já.</MainTitle>
    </Container>
    <MovieCard>
      {MovieList? MovieInfo: <Loading/>}
    </MovieCard>
    <ContainerPagination>
    <Stack spacing={2} >
    <a href ="#"> <Pagination 
      count={10} 
      shape="rounded" 
      onChange={(_,newPage)=>{setPage(newPage)}}
      page ={page}
      />
      </a>
     </Stack>
     </ContainerPagination>
    </div>
    
  )
}

export default MainPage