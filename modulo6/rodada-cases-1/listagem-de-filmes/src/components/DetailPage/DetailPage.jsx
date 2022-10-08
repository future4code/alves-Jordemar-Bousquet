import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToMainPage } from '../Routes/Coordinator'
import { Container, Title, GenderList, Sinopse, ImgPoster,CastContainer, CastImage, CastTitle} from './DetailStyled'
import { BASE_URL, IMAGE_URL } from '../constants/urls'
import { APIKEY } from '../constants/key'
import axios from 'axios'


const DetailPage = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [Movie, setMovie] = useState('')
  const [Cast, setCast] = useState('')


  useEffect(() => {
    getMovieById();
    getCastbyd();
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

const getCastbyd = () => {
  const url = `${BASE_URL}/movie/${params.id}/credits${APIKEY}&language=pt-BR`

  axios.get(url)
  .then((resp) => {
    setCast(resp.data.cast)
  })
  .catch((err) => {
    console.log(err)
  })
}


console.log(Cast)


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
      <button onClick={() => goToMainPage(navigate)}>Pagina Principal</button>
    </div>
  )
}

export default DetailPage