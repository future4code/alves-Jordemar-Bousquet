import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetailPage = () => {

const navigate = useNavigate()

const goToMainPage = () =>{
  navigate('/')
}

  return (
    <div>
      <h2>DetailPage</h2>
      <button onClick={goToMainPage}>Pagina Principal</button>

    </div>
  )
}

export default DetailPage