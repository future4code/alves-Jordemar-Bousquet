import { useNavigate,useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { goBack, goToLogout } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'


const TripDetailsPage = () => {

const [tripDetail, setTripDetail] = useState({})
const[DecideCandidateId, setDecideCandidateId] = useState('')
const [body,setBody] = useState({})

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


useEffect(() =>{

  putDecideCandidate()

},[DecideCandidateId])

const getDecideCandidate = (aprove,decide) =>{
  setDecideCandidateId(aprove)
  setBody({approve:decide})

}

const putDecideCandidate = () =>{
    

    axios.put(`${BASE_URL}/trips/${trip.id}/candidates/${DecideCandidateId}/decide`,body,{
      headers:{
        auth:token
      }
    }).then((resp)=>{
        alert('Decisão acadata com Sucesso!!')
        
        
      }).catch((err)=>{

        console.log(err.response.data.message)
      })

}





const canditates = tripDetail.candidates


const ListCandidate = canditates && canditates.map((canditate) => {
  return <div key={canditate.id}>
    <p><b>Nome: </b>{canditate.name}</p>
    <p><b>Idade: </b>{canditate.age}</p>
    <p><b>Profissão: </b>{canditate.profession}</p>
    <p><b>País: </b>{canditate.country}</p>
    <p><b>Porque devemos escolher você?: </b>{canditate.applicationText}</p>
    <button onClick={() => getDecideCandidate(canditate.id,true)}>Aprovar</button>
    <button onClick={() => getDecideCandidate(canditate.id,false)}>Repovar</button>
    
    </div>
})

const aproved = tripDetail.approved

const ListAproved = aproved && aproved.map((aprov)=>{
    return <div key={aprov.id}> 
      <ul>
          <li>{aprov.name}</li>
        </ul>
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
        {ListAproved}
        

        </div>
    </div>
  )
}

export default TripDetailsPage