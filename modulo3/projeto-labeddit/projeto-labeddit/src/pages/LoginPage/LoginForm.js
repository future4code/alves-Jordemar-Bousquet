import React from 'react'
import { Button } from "@material-ui/core"
import { InputContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'

function LoginForm() {
  const {form, onChange, cleanFields} = useForm({ email: '', password: '' })
  


  const OnSubmitForm = (event) => {
    event.preventDefault()


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