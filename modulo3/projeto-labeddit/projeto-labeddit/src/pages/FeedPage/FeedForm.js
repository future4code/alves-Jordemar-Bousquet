import React from 'react'
import {InputContainer} from './styled'
import TextField from '@material-ui/core/TextField'
import { Button } from "@material-ui/core"
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {createPost} from '../../services/request'

function FeedForm() {
const {form,onChange,clear} = useForm({title:'', body:''})




const onSubmitPost = (event) =>{
    event.preventDefault()
    createPost(form,clear)
}


  return (
    <InputContainer>
        <form onSubmit={onSubmitPost}>
          <TextField
            name={'title'}
            value={form.title}
            onChange={onChange}
            label={'Titulo'}
            variant ={'outlined'}
            fullWidth
            margin={'normal'}
            
          />

          <TextField
            name={'body'}
            value={form.body}
            onChange={onChange}
            label={'Post'}
            variant ={'outlined'}
            fullWidth
            margin={'normal'}
          />

          <Button
          type={'submit'}
          fullWidth
          variant={"contained"}
          color="primary"
          margin={'normal'}
          >Postar
          </Button>


        </form>
    </InputContainer>
  )
}

export default FeedForm