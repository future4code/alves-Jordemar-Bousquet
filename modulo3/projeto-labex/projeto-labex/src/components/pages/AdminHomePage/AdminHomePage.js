import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { goToTripDetails, goToLogout, goTocreateTrip } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

const AdminHomePage = () => {
const [trips,setTrips] = useState('')

const navigate = useNavigate()

const token = localStorage.getItem('token')

useEffect(()=>{
  getTrips()

},[])



const getTrips = () => {
  axios.get(`${BASE_URL}/trips`,{
    headers:{
      auth:token
    }
  })
  .then((resp) =>{
    setTrips(resp.data.trips)

  })
  .catch((err) => {
    alert('Erro!! Tente Novamente')
  })

}

const ListTrips = trips && trips.map((trip) =>{
  return <div key={trip.id} value={trip.id}>
    <p><b>Nome:</b>{trip.name}</p>
    <button onClick ={() => goToTripDetails(navigate, trip.id)}>Detalhes</button>
    
    <hr/>
    
    </div>
  })

  return (
    <div>
      <button onClick={() => goToLogout(navigate)}>Logout</button>
        <button onClick={() => goTocreateTrip(navigate)}>Criar Viagem</button>
        <div>
         <h2>Painel Administrativo</h2>
          {ListTrips}
        </div>
    </div>
  )
}

export default AdminHomePage