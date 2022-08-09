import React,{useState} from 'react'
import {InputContainer} from './styled'
import TextField from '@material-ui/core/TextField'
import { Button } from "@material-ui/core"
import useForm from '../../hooks/useForm'
import {useParams} from 'react-router-dom'
import {createComment} from '../../services/request'
import CircularProgress from '@material-ui/core/CircularProgress'

function CommentForm() {
const params = useParams()    
const {form,onChange,cleanFields} = useForm({body:''})
const[isLoading,setIsLoading] = useState(false)

const onSubmitComment = (event) =>{
    event.preventDefault()
    createComment(params.id,form,cleanFields, setIsLoading)
    
}


  return (
    <InputContainer>
        <form onSubmit={onSubmitComment}>
       
        <TextField
          name={'body'}
          value={form.body}
          multiline
          rows={4}
          label={'Comentar'}
          variant="outlined"
          fullWidth
          margin={'normal'}
          onChange={onChange}  
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

export default CommentForm