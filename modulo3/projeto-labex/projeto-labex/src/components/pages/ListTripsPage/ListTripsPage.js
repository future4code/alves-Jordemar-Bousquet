import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAplicationForm } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'


const ListTripsPage = () => {
  const [trips,setTrips] = useState('')

const navigate = useNavigate()

useEffect(() => {
  getTrip()

},[])


const getTrip = () =>{

  axios.get(`${BASE_URL}/trips`)
  .then((resp) => {
    setTrips(resp.data.trips)

  }).catch((err) =>{
      console.log(err)
  })

}

const ListTrips = trips && trips.map((trip) =>{
  return <div key={trip.id} value={trip.id}>
    
    <p><b>Nome:</b>{trip.name}</p>
    <p><b>Descrição:</b>{trip.description}</p>
    <p><b>Planeta:</b>{trip.planet}</p>
    <p><b>Data:</b>{trip.date}</p>
    <p><b>Duração:</b>{trip.durationInDays}</p>
    <hr/>
    
    </div>
})

  return (
    <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToAplicationForm(navigate)}>Inscerver-se</button>
        <div>
          <h1>Lista de Viagem</h1>
          {ListTrips}
        </div>
    </div>
  )
}

export default ListTripsPage