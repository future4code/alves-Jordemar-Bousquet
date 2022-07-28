import React from 'react';
import {StyledCard, StyledCardContent} from './styled'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function PostCard(props) {


  return (
    <StyledCard >
      <StyledCardContent>
        <Typography color="textSecondary" variant="subtitle2" gutterBottom>
          Enviado por:{props.user}
        </Typography>
        <Typography variant="h5">
        {props.title}
        </Typography>
        <Typography variant="p">
          {props.body}
        </Typography>
      </StyledCardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
}