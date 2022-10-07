import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToMainPage } from '../Routes/Coordinator'
import { Container } from './DetailStyled'
import { BASE_URL, IMAGE_URL } from '../constants/urls'
import { APIKEY } from '../constants/key'
import axios from 'axios'


const DetailPage = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [Movie, setMovie] = useState('')


  useEffect(() => {
    getMovieById();
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

  console.log(Movie)

  const GenresMovie = Movie.genres && Movie.genres.map((gen) => {
    return <ul>
      <li>{gen.name}</li>
    </ul>
  })


  return (
    <div>
      <Container>
        <img src={`${IMAGE_URL}${Movie.poster_path}`} style={{ width: "380px" }} />
        <h2>{Movie.title}</h2>
        {GenresMovie}
        <strong>Sinopse</strong>
        <p>{Movie.overview}</p>
      </Container>
      <button onClick={() => goToMainPage(navigate)}>Pagina Principal</button>

    </div>
  )
}

export default DetailPage