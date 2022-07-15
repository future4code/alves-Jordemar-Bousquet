import { useNavigate,useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { goBack, goToLogout } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

const TripDetailsPage = () => {

const [tripDetail, setTripDetail] = useState({})

const trip = useParams()
const navigate = useNavigate()



const token = localStorage.getItem('token')



const GetTripDetail = () =>{
  axios.get(`${BASE_URL}/trip/${trip.id}`,{
    headers:{
      auth:token
    }
  }).then((res) =>{
    setTripDetail(res.data.trip)
    
    

  }).catch((err) =>{

    console.log(err)
  })
}

useEffect(()=>{
  GetTripDetail()

},[])

console.log(tripDetail)


  return (
    <div>
       <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToLogout(navigate)}>Logout</button>
        <div>
        <h3>{tripDetail.name}</h3>
        <p>Descrição: {tripDetail.description}</p>
        <p>Planeta: {tripDetail.planet}</p>
        <p>Duração: {tripDetail.durationInDays}</p>
        <p>Data: {tripDetail.date}</p>
        </div>

        <div>
          <h3>Candidatos Pendentes</h3>
          <p>Nome:</p>
          <p>Idade:</p>
          <p>Profissão:</p>
          <p>País:</p>
          <p>Texto da Candidadtura: </p>
        </div>

        <div>
        <h3>Candidatos Aporvados</h3>
        <ul>
          <li>Eu</li>
          <li>Tu</li>
          <li>Ele/Ela</li>
        </ul>

        </div>
    </div>
  )
}

export default TripDetailsPage