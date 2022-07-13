import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../../Routes/coordinator'

const HomePage = () => {

const navigate = useNavigate()


  return (
    <div>
        
        <h1>LabeX</h1>
        <h3>Encontre as Melhores Viagens Espaciais</h3>
        <button onClick={() => goToListTrip(navigate)}>Ver Viagens</button>
        <button onClick={() => goToLogin(navigate)}>Login</button>
        
    </div>
  )
}

export default HomePage