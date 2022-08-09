import React,{useState} from 'react'
import {InputContainer} from './styled'
import TextField from '@material-ui/core/TextField'
import { Button } from "@material-ui/core"
import useForm from '../../hooks/useForm'
import {createPost} from '../../services/request'
import CircularProgress from '@material-ui/core/CircularProgress'

function FeedForm() {
const {form,onChange,cleanFields} = useForm({title:'', body:''})
const[isLoading,setIsLoading] = useState(false)




const onSubmitPost = (event) =>{
    event.preventDefault()
    createPost(form,cleanFields,setIsLoading)
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
          >{isLoading? <CircularProgress color ={'inherit'} size={24}/>: <>Postar</>}
          </Button>


        </form>
    </InputContainer>
  )
}

export default FeedForm