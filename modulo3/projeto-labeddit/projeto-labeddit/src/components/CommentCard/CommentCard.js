import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {StyledCard, StyledCardContent} from './styled'


export default function CommentCard(props) {
 


  return (
    
    <StyledCard >
      <StyledCardContent>
        <Typography variant="p">
          {props.comment}
        </Typography>
      </StyledCardContent>
      <CardActions>
      </CardActions>
    </StyledCard>
  );
}