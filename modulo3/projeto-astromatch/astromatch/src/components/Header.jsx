import React from 'react'

function Header(props) {
  return (
    <header>
        <h1>AstroMatch</h1>
        {props.pagina === 'perfil'?
        <button onClick={props.mudaParaMatch}>Ir para matches</button>
        :
        <button onClick={props.mudaParaPerfil}>Ir para perfi</button>
      }
    </header>
    
  )
}

export default Header