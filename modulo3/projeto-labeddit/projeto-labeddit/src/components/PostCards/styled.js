import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    padding:25px;
    margin:18px;
    height:30vh;
    border-radius:55px;
`

export const StyledCardContent = styled(CardContent)`
   font-family:'Times New Roman', Times, serif;
   font-style:oblique;

`