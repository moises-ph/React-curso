import './App.css';
import imagen0 from './images/rey_atanagildo.png';
import imagen1 from './images/rey_ataulfo.png';
import {useRef} from 'react';

function App() {
  const cambio = 23.16;
  const refCaja = useRef();
  const incrementar=(e) =>{
    if(e.target.innerHTML < 9){
      if(e.target.innerHTML >= 7){
        e.target.style.backgroundColor = "red";
        e.target.innerHTML = Number(e.target.innerHTML) + 1;
      } else {
        e.target.innerHTML = Number(e.target.innerHTML) + 1;
      }
    } else {
      e.target.style.backgroundColor = "white";
      e.target.innerHTML = 1;
    }
    
  }
  const convertir = () =>{
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML)*cambio;
  }
  const cambia = (j) =>{
    if(j.target.src.includes("rey_atanagildo")){
      j.target.src = imagen1;
    } 
    else {
      j.target.src = imagen0; 
    }
    
  }
  const lectura=(y) => {
    refCaja.current.innerHTML = y.target.value;
  }
  return (
    <>
      <div ref={refCaja} onClick={incrementar} className='caja'>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambia} src={imagen0}/>
      </div>
      <input onChange={lectura} className='campo'/>
    </>
  );
}

export default App;
