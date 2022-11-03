import React, { useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { refreshDetailpage } from '../Routes/Coordinator'
import { Container, Title, GenderList, Sinopse, ImgPoster,CastContainer, CastImage, CastTitle, TrailerContainer, RecommendationsContainer,RecommendationsImage, RecommendationsTitle} from './DetailStyled'
import { BASE_URL, IMAGE_URL,YOUTUBE_URL} from '../constants/urls'
import { APIKEY } from '../constants/key'
import axios from 'axios'
import CircularProgressWithLabel from '../CircularProgressLabel'
import Loading from '../Loading'
import moment from "moment"

const DetailPage = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [Movie, setMovie] = useState('')
  const [Cast, setCast] = useState('')
  const [Trailer, setTrailer] = useState('')
  const [Recommendations, setRecommendations] = useState('')
  const NumberRating = Math.trunc(Movie.vote_average).toFixed(1)
  const StringRating = NumberRating.toString().replace(".", "")

 
  useLayoutEffect(() => {
    getMovieById();
    getCastbyId();
    getTrailerbyId();
    getRecommendationsById();
  })


  const getMovieById = () => {
    const url = `${BASE_URL}/movie/${params.id}${APIKEY}&language=pt-BR`

    axios.get(url)
      .then((resp) => {
        setMovie(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }

const getCastbyId = () => {
  const url = `${BASE_URL}/movie/${params.id}/credits${APIKEY}&language=pt-BR`

  axios.get(url)
  .then((resp) => {
    setCast(resp.data.cast)
  })
  .catch((err) => {
    console.log(err)
  })
}

const getTrailerbyId = () => {
  const url = `${BASE_URL}/movie/${params.id}/videos${APIKEY}&language=pt-BR`

  axios.get(url)
  .then((resp) => {
    setTrailer(resp.data.results[0])
  })
  .catch((err) => {
    console.log(err)
  })
}

const getRecommendationsById = () => {
  const url = `${BASE_URL}/movie/${params.id}/recommendations${APIKEY}&language=pt-BR&page=1`

  axios.get(url)
  .then((resp) => {
    setRecommendations(resp.data.results)
  })
  .catch((err) => {
    console.log(err)
  })
}

  const GenresMovie = Movie.genres && Movie.genres.map((gen) => {
    return <div key = {gen.id}>
      <dl>
      <dd>{gen.name}</dd>
      </dl>
    </div>
  })

  const CanstInfo = Cast && Cast.map((info)=>{
    return <div key= {info.id} value = {info.id}>
      <CastImage src={`${IMAGE_URL}${info.profile_path}`} style={{ width: "150px" }} />
    <h4>{info.name}</h4>
    <p>{info.character}</p>
    </div>
  })

  const RecommendationsInfo = Recommendations && Recommendations.map((info) =>{
        return <div key= {info.id} value = {info.id}>
          <RecommendationsImage src = {`${IMAGE_URL}${info.poster_path}`} style = {{width:"180px"}} onClick={() => refreshDetailpage(navigate,info.id)} />
      <p><strong>{info.title}</strong></p>
      <p style = {{color:"gray"}}>{moment(info.release_date).format("DD/MM/YYYY")}</p>
        </div>
  })

  return (
    <div>
      <Container>
        <Title>
        <h1>{Movie.title}</h1>
        </Title>
        <GenderList>
          <p>Generos:</p>
          {GenresMovie}
        </GenderList>
       <p>Data de Lançamento: {moment(Movie.release_date).format("DD/MM/YYYY")}</p>
        <CircularProgressWithLabel
        value={Number(StringRating)}/>
        <p>
         Avaliação dos <br/> usuários
         </p>
        <h3>Sinopse</h3>
        <Sinopse>
          {Movie.overview? Movie.overview:"Não há sinopse"}
          </Sinopse>
      </Container>
       <ImgPoster src={`${IMAGE_URL}${Movie.poster_path}`} style={{ width: "418px" }} />
      <CastTitle>Elenco Original</CastTitle>
      <CastContainer>
      {Cast? CanstInfo : <Loading/>}
      </CastContainer>
      {Trailer && (
      <TrailerContainer>
      <h2>{Trailer.name}</h2>
      <iframe width="680" height="360" title ="Trailer" src ={`${YOUTUBE_URL}${Trailer.key}`} />
      </TrailerContainer>
      )}
      <RecommendationsTitle>Recomendações</RecommendationsTitle>
      <RecommendationsContainer>
      {Recommendations? RecommendationsInfo : <Loading/>}
      </RecommendationsContainer>
    </div>
  )
}

export default DetailPage