import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { goToPost } from '../../routes/coordinator';
import {StyledCard, StyledCardContent} from './styled'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import Swal from 'sweetalert2'


export default function PostCard(props) {
  const navigate = useNavigate()
  const [likePost, setLikePosts] = useState(false)
  const [deslikePost, setDeslikePosts] = useState(false)

  const like = () =>{
    if(likePost === true){
      setLikePosts(!likePost)
    } else {
      let body = {
        direction: 1
      }
    
    axios.post(`${BASE_URL}/posts/${props.id}/votes`,body,{
      headers:{
        Authorization:localStorage.getItem('token')
      }
    }).then((resp)=>{
      Swal.fire('Voto Registrado')
      document.location.reload(true)
      setLikePosts(!likePost)
    }).catch((err) =>{
      console.log(err)
    })
  }

  }
  
  const Deslike = () =>{
    if(deslikePost === true){
      setDeslikePosts(!likePost)
    } else {
      let body = {
        direction: -1
      }
    
    axios.delete(`${BASE_URL}/posts/${props.id}/votes`,{
      headers:{
        Authorization:localStorage.getItem('token')
      }
    }).then((resp)=>{
      Swal.fire('Voto Registrado')
      document.location.reload(true)
      setDeslikePosts(!likePost)
    }).catch((err) =>{
      console.log(err)
    })
  }

  }
  

  const onClickPost = (id,title,body,username) =>{
    goToPost(navigate,id,title,body,username)

  }


 


  return (
    <StyledCard >
      <StyledCardContent>
        <Typography color="textSecondary" variant="subtitle2" gutterBottom>
          Enviado por:{props.username}
        </Typography>
        <Typography variant="h5">
        {props.title}
        </Typography>
        <Typography variant="p">
          {props.body}
        </Typography>
      </StyledCardContent>
      <CardActions>
        <Button size="small" onClick ={like}><img src="https://img.icons8.com/windows/32/000000/thumb-up.png"/></Button>
        {props.voteSum}
        <Button size="small" onClick ={Deslike}><img src="https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"/></Button>
        <Button size="small" onClick = {() => onClickPost(props.id,props.title,props.body,props.username)}><img src="https://img.icons8.com/material/24/000000/comments--v1.png"/>{props.commentCount}</Button>
        
      </CardActions>
    </StyledCard>
  );
}