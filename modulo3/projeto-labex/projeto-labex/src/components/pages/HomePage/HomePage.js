import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

const navigate = useNavigate()

const goToListTrip = () => {
  navigate('/ListTripsPage')

}

const goToLogin = () => {
  navigate('/LoginPage')
}

  return (
    <div>
        
        <h1>LabeX</h1>
        <h3>Encontre as Melhores Viagens Espaciais</h3>
        <button onClick={goToListTrip}>Ver Viagens</button>
        <button onClick={goToLogin}>Login</button>
        
    </div>
  )
}

export default HomePage