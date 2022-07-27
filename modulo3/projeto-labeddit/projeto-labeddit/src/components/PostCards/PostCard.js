import React from 'react';
import {StyledCard, StyledCardContent} from './styled'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function PostCard(props) {


  return (
    <StyledCard >
      <StyledCardContent>
        <Typography color="textSecondary" variant="subtitle2" gutterBottom>
          Enviado por:{props.user}
        </Typography>
        <Typography variant="h5" component="p">
          {props.title}
        </Typography>
        <Typography variant="h6" component="p">
          {props.body}
        </Typography>
      </StyledCardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
}