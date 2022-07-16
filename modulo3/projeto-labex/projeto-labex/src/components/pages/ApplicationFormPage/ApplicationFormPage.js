import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/coordinator'
import useForm from '../../hooks/useForms'
import { countries } from '../../constants/coutry'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

const ApplicationFormPage = () => {
  const [trips,setTrips] = useState('')
  const [tripId, setTripId] = useState('')

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  })

  const navigate = useNavigate()

  useEffect(() => {
    getTrip()

  },[])

  const onClickSend = (event) => {
    event.preventDefault();
    ApplytoTrip();
    
    cleanFields();
  }

  const onChangeTripId = (event) =>{
    setTripId(event.target.value)
  }

  const getTrip = () =>{

    axios.get(`${BASE_URL}/trips`)
    .then((resp) => {
      setTrips(resp.data.trips)
      

    }).catch((err) =>{
        alert('Erro!! Tente Novamente')
    })

  }

  const ApplytoTrip = () => {


      axios.post(`${BASE_URL}/trips/${tripId}/apply`,form)
      .then((resp) =>{
        alert("Inscrição Realizada com Sucesso!!")
      })
      .catch((err) =>{

        alert("Erro, Tente Novamente!!")
      })

  }


  const TripsOption = trips && trips.map((trip) =>{
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
  })

  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
        <h3>Inscreva se para uma Viagem</h3>
        <div>
          <form onSubmit={onClickSend}>
            <select onChange={onChangeTripId} >
              <option>Escolha uma Viagem</option>
              {TripsOption}
            </select>
            <input
            placeholder='Nome'
            value ={form.name}
            name ={"name"}
            onChange={onChange}
            pattern={"^.{3,}$"}
            title={"O nome deve ter no mínimo 3 caracteres"}
            required/>

            <input 
            placeholder='Idade'
            value ={form.age}
            name ={"age"}
            onChange={onChange}
            type="number"
            min={18}
            required/>

            <input 
            placeholder='Texto da Candidatura'
            value ={form.applicationText}
            name ={"applicationText"}
            onChange={onChange}
            pattern={"^.{30,}$"}
            title={"O texto deve ter no mínimo 30 caracteres"}
            />

            <input 
            placeholder='Profissão'
            value ={form.profession}
            name ={"profession"}
            onChange={onChange}
            pattern={"^.{10,}$"}
            title={"A profissão deve ter no mínimo 10 caracteres"}
            required/>

            <select placeholder = 'País'
            value ={form.country}
            name ={"country"}
            onChange={onChange}
            required>
              <option value={""} disabled>Escolha um País</option>
              {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
            </select>
            <button>Enviar</button>
          </form>
        </div>
        
    </div>
  )
}

export default ApplicationFormPage