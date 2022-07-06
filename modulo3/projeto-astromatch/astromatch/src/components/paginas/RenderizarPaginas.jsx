import { useState, useEffect } from 'react';
import Header from '../Header'
import PaginaMatch from './PaginaMatch';
import PaginaPerfil from './PaginaPerfil';

function RenderizarPaginas() {

    const [pagina, setPagina] = useState('perfil');

    const mostrarPaginaAtual = () => {
        switch (pagina) {
            case 'perfil':
                return <PaginaPerfil />
            case 'matches':
                return <PaginaMatch />
            default:
                return <PaginaPerfil />
        };
    };

    const mudaParaMatch = () => {
        setPagina('matches');
    };

    const mudaParaPerfil = () => {
        setPagina('perfil');
    };

  return (
    <div>

        <Header
        pagina = {pagina}
        mudaParaMatch ={mudaParaMatch}
        mudaParaPerfil ={mudaParaPerfil}
        />
        <hr />
        <div>
            {mostrarPaginaAtual()}
        </div>

    </div>
  )
}

export default RenderizarPaginas