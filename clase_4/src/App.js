import MiComponente from './MiComponente';
import './App.css';

function App() {
  return (
    <>
    <h2>Reyes Godos: </h2>
    <MiComponente rey={{nombre: "Atanagildo", reses: 12}}/>
    <MiComponente rey={{nombre: "Ataulfo",reses: 18}}/>
    </>
  );
}

export default App;
