import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';


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
    <div>
      <h1>Perfils</h1>
      <img
        src={perfil.photo}
        alt={"Foto de Perfil"}
        height={"200px"} />
      <p>{perfil.name}, {perfil.age}</p>
      <p>{perfil.bio}</p>
      <button onClick={() => { escolhePerfil(perfil.id, false) }}>Dislike</button>
      <button onClick={() => { escolhePerfil(perfil.id, true) }}>Like</button>

    </div>
  ) : (

    <div>
      <h1>Acabaram os matches! Clique em 'Resetar Perfis' para reiniciar</h1>
      <br/>
      <button onClick={resetaPerfil}>Resetar Perfils</button>
    </div>

  )


  return (

    <div>
      {PerfilCard}
    </div>
  )
}

export default PaginaPerfil