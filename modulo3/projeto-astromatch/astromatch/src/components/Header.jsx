import React from 'react'
import {ContainerHead,AstroTag, ContainerTitulo, MachTag, BotaoMatch, BotaoDeslike} from './styledHeader'

function Header(props) {
  return (
    <ContainerHead>
      <ContainerTitulo>
        <AstroTag>Astro</AstroTag>
        <MachTag>Match</MachTag>
      </ContainerTitulo>
       

      <div>
      {props.pagina === 'perfil'?
        <BotaoMatch onClick={props.mudaParaMatch}><img src="https://img.icons8.com/ios-filled/50/7950F2/--tinder.png"/></BotaoMatch>
        :
        <BotaoDeslike onClick={props.mudaParaPerfil}><img src="https://img.icons8.com/ios-glyphs/60/22C3E6/back.png"/></BotaoDeslike>
      }
      </div>
    </ContainerHead>
    
  )
}

export default Header