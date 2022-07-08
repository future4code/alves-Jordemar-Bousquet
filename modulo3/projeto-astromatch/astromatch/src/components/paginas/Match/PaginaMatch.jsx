import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
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
          <div key={matches.id}>
            <img src={matches.photo} 
            alt= {`Foto ${matches.name}`}
            height ={"50px"}/>
            {matches.name}
            
            <hr/>
          </div>
        )

  })

  return (
    <div>
      <h1>Matches</h1>
        {listaMatches}
    </div>
  )
}

export default PaginaMatch