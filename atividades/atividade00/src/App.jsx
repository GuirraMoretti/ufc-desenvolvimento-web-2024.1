import MeusDados01 from "./components/atividade00/01MeusDados";
import { MeusDados01a, MeusDados01c } from "./components/atividade00/01MeusDados";
import MeusDados02 from "./components/atividade00/02MeusDados";
import Temperatura03 from "./components/atividade00/03Temperatura";


function App() {
  return (
    <div>
      <h1>Atividade 00</h1>
      <hr />
      <MeusDados01c />
      <hr />
      <MeusDados01a />
      <hr />
      <MeusDados01 />
      <hr />
      <MeusDados02 
        nome="Francisco Vitor Gomes Castro"
        curso="Sistemas de Informação"
        faculdade="Universidade Federal do Ceará"
        />
      <hr />
      <Temperatura03 />
      
    </div>
  );
}

export default App;