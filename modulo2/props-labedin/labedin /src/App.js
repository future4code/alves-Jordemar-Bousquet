import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import minhaFoto1 from './img/eu.jpg'
import minhaFoto2 from './img/jord.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem= {minhaFoto1}
          nome="Jordemar do Desterro Bousquet" 
          descricao="Olá, me chamo Jordemar do Desterro Bousquet, mais pode me chamar de Jord.
          Sou um Programador Web Full Stack em desenvolvimento, apaixonado por tecnologia desdes sempre.
          Formado em Analise e Desenvolvimento de Sistemas, estou sempre em busca de aprendizado e adquirindo conhecimentos para ser um grande profissional na área de tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    <div>
      <CardPequeno
        imagem = "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/undefined/external-emails-shopping-and-commerce-smashingstocks-glyph-smashing-stocks.png"
        email = "jordbousquet@gmail.com"/>
         <CardPequeno
        imagem = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACoklEQVRoge2aS2sUQRRGz4gaBVsDBmIgCxklQlDxLyi4CCooRMWNq/ySEURQdKPEx1oEEclGECGaID4QjJlFwJ2oJBoUEfIARxhddDUzznR33ep6tEo+uJuuW7e+U3R1V9cMrOnvUsVxvQg4ChwEDgA7gV7V9h14B9SBx8ADYMnx+NYaAMaBFeCXMFaAW8DuEvx2qQeoAcvIATqjAVxQtUpRHzCdY9A0ngM7ghIAe4EPlsbT4r2qHUT9niDaYfp9Q2wivgV8QSTxDM9rphYAIonzviAGsHs6mcYPoOoDZLygoYaKIn1vuIbYQvwWNjUyRfwUGgIeFui/rMZ2pjOGBuZVn7Q684a1TrkEuSkctAFcIt5zQTybF1UkMxupHOntdt0lyCvBgNPAvrY+x4jfCUn7AnCW1kZ1CHgkqPvCJcgXzWBjbQaHgcmc3EmVg+ozpqm9KDG4XgiyVdM+qAYFmAU25OQeUjkbVZ9BTe1tEoNSrZI/a6ttudJFXKR2ptYJQb5p2jdnXK90hEnfRF817YAc5JMwz4c+S5KkILMWRmz1RpIkBZmxMGIrEYhUVeSLN+1aXpuurvNv+reaAYsqr+actIj01gK4Z+LOke77KFoFmsjfE7bRxONR0ZOAIFO+IABGAoKM+AQB2U7YNmZwf5zbpeMBQE74hoB4puoeIeYwe5paadQjyMlQEInyPp6KxlMCrI1ODVP8mCctfgL7gxK06bLAoDSuBPb+hyLMj3fSYpHWL1ulycXCPx3cdYZuUxziTgl+M9ULfMQcYgHYXoLfXB3GfHd8pBSnAl1FDnGtJI8i9QCv0UPU0R8Dla5dxH8OyIJYAvaU5s5Qo6Svl6Zq+6d0jm6QWqmOCqoC3KUFMUHA7blrRcBLFZEmd03/lX4DomQGlnTSX3EAAAAASUVORK5CYII="
        endereço = "Rua Eliseu de Alvarenga N 88"/>
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={minhaFoto2}  
          nome="Minhas Experiências" 
          descricao="Conclui meu ensino médio em um colégio estadual chamado Aydano de Almeida em Nilopolis/Rj.
          Tenho curso tecnico em Design Grafico feito na JFW Unidade Nilopolis/Rj.
          Conclui meu ensino superior na faculdade Unopar em Nova Iguaçu/Rj e
          atualmente estou realizando em curso especializado em Web Fullstack na Labenu.
          Também trabalho a 10 anos como Atendente de Telemarketing" 
        />
        
        <CardGrande 
          imagem="https://img.icons8.com/cute-clipart/64/undefined/rocket.png" 
          nome="Minhas habilidades como profissional" 
          descricao="Facilidade de aprendizado, Paciência e Trabalho em Equipe" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
