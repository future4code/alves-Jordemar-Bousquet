import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForms'
import { goBack , goToLogout  } from '../../Routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import { planets } from '../../constants/planets'
import axios from 'axios'

const CreateTripPage = () => {
const { form, onChange, cleanFields } = useForm({ 
  name: "", 
  planet: "", 
  date: "", 
  description: "", 
  durationInDays: "" })

const token = localStorage.getItem('token')

const navigate = useNavigate()

const onClickCreate = (event) => {
  event.preventDefault()
  CreateTrip()

}


const CreateTrip = () => {
  axios.post(`${BASE_URL}/trips`,form,{
    headers:{
      auth:token
    }
  }).then((resp) =>{

    console.log(resp)

  }).catch((err) => {

    console.log(err)
  })

}

  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToLogout(navigate)}>Logout</button>
        <div>
        <h3>Criar Viagem</h3>
        <form onSubmit = {onClickCreate}>
        
        <input 
        onChange ={onChange}
        value={form.name}
        name ={'name'}
        placeholder='Nome'
        required/>
        <select
        placeholder={"Planeta"}
        name={"planet"}
        defaultValue={""}
        onChange={onChange}
        required>
          <option value={""} disabled>Escolha um Planeta</option>
          {planets.map((planet) => {
          return <option value={planet} key={planet}>{planet}</option>
          })}
        </select>
        <input 
        type ='date'
        placeholder={"Data"}
        name={"date"}
        value={form.date}
        onChange={onChange}
        required/>

        <input 
        placeholder='Descrição'
        name={"description"}
        value={form.description}
        onChange={onChange}
        pattern={"^.{30,}$"}
        title={"O nome deve ter no mínimo 30 caracteres"}
        required/>

        <input 
        placeholder="Duração em dias"
        type="number"
        name={"durationInDays"}
        value={form.durationInDays}
        onChange={onChange}
        min={50}
        required />

        <button type='submit'>Criar</button>
        </form>
        </div>
        
    </div>
  )
}

export default CreateTripPage