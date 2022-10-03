import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

  const navigate = useNavigate()

const goToDetailpage = () =>{
  navigate('/detail')

}

  return (
    <div>
      <h2>MainPage</h2>
      <button onClick={goToDetailpage}>Detalhes</button>
    </div>
    
  )
}

export default MainPage