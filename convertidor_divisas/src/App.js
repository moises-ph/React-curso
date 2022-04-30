import React,{useState} from 'react';
import './App.css';

function App() {

  const [pesosC, setPesosC] = useState();
  const [dolares, setDolares] = useState();
  const [pesosA, setPesosA] = useState();
  const [pesosM, setPesosM] = useState();
  
  const convertir = (e) =>{
    let moneda_inicial = Number(e.target.value);
    setDolares(moneda_inicial * 1.05);
    setPesosA(moneda_inicial * 121.12);
    setPesosC(moneda_inicial * 4177,23);
    setPesosM(moneda_inicial * 21,48);
  }


  return (
    <div className="App">
      <label htmlFor='euro'>Euro</label>
      <input type="number" id="euro" onChange={convertir}></input>
      <label htmlFor='peso_a'>Peso Argentino</label>
      <input type="number" id="peso_a" readOnly value={pesosA}></input>
      <label htmlFor='peso_c'>Peso Colombiano</label>
      <input type="number" id="peso_c" readOnly value={pesosC}></input>
      <label htmlFor='peso_M'>Peso Mexicano</label>
      <input type="number" id="peso_M" readOnly value={pesosM}></input>
      <label htmlFor='dolar'>Dolar</label>
      <input type="number" id="dolar" readOnly value={dolares}></input>
    </div>
  );
}

export default App;