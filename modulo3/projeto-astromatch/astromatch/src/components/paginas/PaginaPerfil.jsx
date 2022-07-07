 import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';


function PaginaPerfil() {

const [perfil, setPerfil] = useState('');


useEffect(() => {

    pegaPerfil();

},[]);


const pegaPerfil = () => {

const url = `${BASE_URL}:aluno/person`;

axios.get(url)
            .then((res) => {
                setPerfil(res.data.profile);
                
            })
            .catch((err) => {
                console.log(err);
            });

}

  return (

    <div>
      <h1>Perfil</h1>
      <img 
      src ={perfil.photo}
      alt ={"Foto de Perfil"}
      height ={"200px"}/>
      <p>{perfil.name}, {perfil.age}</p>
      <p>{perfil.bio}</p>
      <button onClick={pegaPerfil}>Proximo Perfil</button>
      </div>
  )
}

export default PaginaPerfil