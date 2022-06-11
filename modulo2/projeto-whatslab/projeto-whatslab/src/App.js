
import './App.css';
import {Container}from "./styled"
import { Borda } from './styled';
import BotaoEnviar from './componentes/BotaoEnviar';
import CaixaMensagem from './componentes/CaixaMensagem';
import CaixaUsuario from './componentes/CaixaUsuario';

function App() {
  return (
    <Container>

      <Borda>
      <CaixaUsuario text="Usuário"/>
      <CaixaMensagem text= "Mensagem" />
      <BotaoEnviar/>
      </Borda>
      
    </Container>
  );
}

export default App;
