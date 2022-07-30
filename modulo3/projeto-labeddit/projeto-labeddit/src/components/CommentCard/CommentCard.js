import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {StyledCard, StyledCardContent} from './styled'


export default function CommentCard(props) {
 


  return (
    
    <StyledCard >
      <StyledCardContent>
      <Typography color="textSecondary" variant="subtitle2" gutterBottom>
          Enviado por:{props.username}
        </Typography>
        <Typography variant="p">
          {props.body}
        </Typography>
      </StyledCardContent>
      <CardActions>
      </CardActions>
    </StyledCard>
  );
}