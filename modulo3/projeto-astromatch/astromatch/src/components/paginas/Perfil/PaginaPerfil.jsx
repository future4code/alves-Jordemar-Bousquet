import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import {ContainerPerfil, ImagemPerfil, ContainerTitulo, ContainerDescricao,Botao} from './styledPerfil'


function PaginaPerfil() {

  const [perfil, setPerfil] = useState('');


  useEffect(() => {

    pegaPerfil();

  }, []);


  const pegaPerfil = () => {

    const url = `${BASE_URL}:aluno/person`;

    axios.get(url)
      .then((resp) => {
        setPerfil(resp.data.profile);

      })
      .catch((err) => {
        console.log(err);
      });

  }


  const escolhePerfil = (IdPerfil, escolha) => {
    const url = `${BASE_URL}:aluno/choose-person`

    const body = {
      id: IdPerfil,
      choice: escolha
    }

    axios.post(url, body)
      .then((resp) => {

        if (body.choice && resp.data.isMatch) {
          alert("Match :)");
      };

        pegaPerfil()
      })
      .catch((err) => {
        console.log(err.message)
      })

  }

  const resetaPerfil = () => {
    const url = `${BASE_URL}:aluno/clear`

    axios.put(url)
      .then((resp) => {
        alert("Perfis resetados com sucesso!")
        pegaPerfil();
      })
      .catch((err) => {
        console.log(err.message)
      })


  }

  const PerfilCard = perfil ? (
    <ContainerPerfil>
      
      <ImagemPerfil
        src={perfil.photo}
        alt={"Foto de Perfil"}
        />
      <ContainerTitulo>
      <p>{perfil.name}, {perfil.age}</p>
      </ContainerTitulo>
      <ContainerDescricao>
      <p>{perfil.bio}</p>
      </ContainerDescricao>
      <Botao onClick={() => { escolhePerfil(perfil.id, false) }}><img src="https://img.icons8.com/sf-regular-filled/48/228BE6/x.png"/></Botao>
      <Botao onClick={() => { escolhePerfil(perfil.id, true) }}><img src="https://img.icons8.com/color/48/FA5252/filled-like.png"/></Botao>
      
    </ContainerPerfil>
  ) : (

    <div>
      <h4>Acabaram os matches! Clique em 'Resetar Perfis' para reiniciar</h4>
      <br/>
      <Botao onClick={resetaPerfil}>Resetar Perfils</Botao>
    </div>

  )


  return (

    <div>
      {PerfilCard}
    </div>
  )
}

export default PaginaPerfil