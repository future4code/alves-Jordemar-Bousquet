import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@material-ui/core"
import { InputContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import {SignUp} from '../../services/request'


function SingUpForm({setRightButtonText}) {
  const navigate = useNavigate()
  const {form, onChange, cleanFields} = useForm({ username:'', email: '', password: '' })
  


  const OnSubmitForm = (event) => {
    event.preventDefault()
    SignUp(form,cleanFields,navigate, setRightButtonText)
    console.log(form)

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
          />

          <Button
          type={'submit'}
          fullWidth
          variant={"contained"}
          color="primary"
          margin={'normal'}
          >Cadastrar
          </Button>
        </form>
      </InputContainer>
  )
}

export default SingUpForm