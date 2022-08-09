import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@material-ui/core"
import { InputContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import {SignUp} from '../../services/request'
import CircularProgress from '@material-ui/core/CircularProgress'

function SingUpForm({setRightButtonText}) {
  const navigate = useNavigate()
  const {form, onChange, cleanFields} = useForm({ username:'', email: '', password: '' })
  const[isLoading,setIsLoading] = useState(false)
  


  const OnSubmitForm = (event) => {
    event.preventDefault()
    SignUp(form,cleanFields,navigate, setRightButtonText, setIsLoading)

  }

  return (
      <InputContainer>
        <form onSubmit={OnSubmitForm}>

        <TextField
            name={'username'}
            value={form.username}
            onChange={onChange}
            label={'Nome de Usuário'}
            variant ={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type ={'name'}
          />

          <TextField
            name={'email'}
            value={form.email}
            onChange={onChange}
            label={'E-mail'}
            variant ={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type ={'email'}
          />

          <TextField
            name={'password'}
            value={form.password}
            onChange={onChange}
            label={'Senha'}
            variant ={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type ={'password'}
            pattern={"[0-9a-zA-Z$*&@#]{8,}"}
            title={"A senha deve ter no mínimo 8 caracteres"}
          />

          <Button
          type={'submit'}
          fullWidth
          variant={"contained"}
          color="primary"
          margin={'normal'}
          >{isLoading? <CircularProgress color ={'inherit'} size={24}/>:<>Cadastrar</>}
          </Button>
        </form>
      </InputContainer>
  )
}

export default SingUpForm