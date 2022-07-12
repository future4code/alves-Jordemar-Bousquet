import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { ImgMatch,ContainerMatch,ContainerCard, MatchNome, MatchBio } from './styledMatch';

function PaginaMatch() {

  const [match,setMatch] = useState('')


  useEffect(() => {
    pegaMatch()

  },[])


 const pegaMatch = () => {
      const url = `${BASE_URL}:aluno/matches`

      axios.get(url)
            .then((resp) => {
                setMatch(resp.data.matches)
            })
            .catch((err) => {
                console.log(err.message)
            })

  }


  const listaMatches = match && match.map((matches) => {
        return(
          <ContainerCard key={matches.id}>
            <ImgMatch src={matches.photo} 
            alt= {`Foto ${matches.name}`}
            />
           <MatchNome>{matches.name} - {matches.age}</MatchNome>
            
            <MatchBio><br/>{matches.bio}</MatchBio>
          </ContainerCard>
        )

  })

  return (
    <ContainerMatch>
      <h1>Matches</h1>
        {listaMatches}
    </ContainerMatch>
  )
}

export default PaginaMatch