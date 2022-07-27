import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@material-ui/core"
import { InputContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import {Login} from  '../../services/request'

function LoginForm({setRightButtonText}) {
  const {form, onChange, cleanFields} = useForm({ email: '', password: '' })
  const navigate = useNavigate()
  


  const OnSubmitForm = (event) => {
    event.preventDefault()
    Login(form, cleanFields, navigate, setRightButtonText)
  }


  return (
      <InputContainer>
        <form onSubmit={OnSubmitForm}>
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
          >Entrar
          </Button>


        </form>
      </InputContainer>
  )
}

export default LoginForm