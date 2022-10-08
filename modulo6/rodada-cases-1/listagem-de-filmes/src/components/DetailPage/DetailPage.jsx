import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToMainPage } from '../Routes/Coordinator'
import { Container, Title, GenderList, Sinopse, ImgPoster,CastContainer, CastImage, CastTitle} from './DetailStyled'

import { BASE_URL, IMAGE_URL,YOUTUBE_URL} from '../constants/urls'
import { APIKEY } from '../constants/key'
import axios from 'axios'


const DetailPage = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [Movie, setMovie] = useState('')
  const [Cast, setCast] = useState('')
  const [Trailer, setTrailer] = useState('')


  useEffect(() => {
    getMovieById();
    getCastbyId();
    getTrailerbyId();
  }, [])


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

  const GenresMovie = Movie.genres && Movie.genres.map((gen) => {
    return <p>
      <>{gen.name},</>
    </p>
  })

  const CanstInfo = Cast && Cast.map((info)=>{
    return <div>
      <CastImage src={`${IMAGE_URL}${info.profile_path}`} style={{ width: "150px" }} />
    <h4>{info.name}</h4>
    <p>{info.character}</p>
    </div>
  })

  return (
    <div>
      <Container>
        <Title>
        <h1>{Movie.title}</h1>
        </Title>
        <GenderList>
        {GenresMovie}
        </GenderList>
        
        <Sinopse>
        <h3>Sinopse</h3>
          {Movie.overview}
          </Sinopse>
      </Container>
      <ImgPoster src={`${IMAGE_URL}${Movie.poster_path}`} style={{ width: "418px" }} />
      <CastTitle>Elenco Original</CastTitle>
      <CastContainer>
      {CanstInfo}
      </CastContainer>
      <div>
      <h1>{Trailer? Trailer.name : "Não há Trailer disponível"}</h1>
      <iframe width="680" height="360" src ={`${YOUTUBE_URL}${Trailer.key}`}  allowfull/>
      </div>
      <button onClick={() => goToMainPage(navigate)}>Pagina Principal</button>
    </div>
  )
}

export default DetailPage