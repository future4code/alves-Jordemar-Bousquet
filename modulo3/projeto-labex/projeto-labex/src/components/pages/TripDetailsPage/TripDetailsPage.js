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

const canditates = tripDetail.candidates

const ListCandidate = canditates && canditates.map((canditate) => {
  return <div key={canditate.id}>
    <p><b>Nome: </b>{canditate.name}</p>
    <p><b>Idade: </b>{canditate.age}</p>
    <p><b>Profissão: </b>{canditate.profession}</p>
    <p><b>País: </b>{canditate.country}</p>
    <p><b>Porque devemos escolher você?: </b>{canditate.applicationText}</p>
    <button>Aprovar</button>
    <button>Repovar</button>
    
    </div>
        

})
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
        <hr/>
        <div>
          <h3>Candidatos Pendentes</h3>
          {ListCandidate}
        </div>
        <hr/>
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