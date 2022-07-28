import React from 'react';
import {useNavigate} from 'react-router-dom'
import { goToPost } from '../../routes/coordinator';
import {StyledCard, StyledCardContent} from './styled'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function PostCard(props) {
  const navigate = useNavigate()

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
        <Button size="small">Curtir</Button>
        <Button size="small">Descurtir</Button>
        <Button size="small" onClick = {() => onClickPost(props.id,props.title,props.body,props.username)}>Comentarios</Button>
      </CardActions>
    </StyledCard>
  );
}