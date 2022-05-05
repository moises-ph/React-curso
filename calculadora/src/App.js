import React, {useState} from 'react';
import './App.css';


function App() {
  const [numeros, setNumeros] = useState('');
  const [resultado, setResultado] = useState('0');

  const reset = () => {
    setResultado('0');
    setNumeros('');
  }

  const guardar_num_porcentaje = () => {
    setNumeros(numeros + '/100');
    setResultado(resultado + '%');
  }

  const guardar_num = (e) => {
    setNumeros(numeros + e.target.value); 
    if(resultado === '0'){
      setResultado(e.target.value);
    }
    else if(resultado !== '0'){
      setResultado(resultado + e.target.value); 
    }
  };

  const realizar = () =>{
    setResultado(eval(numeros));
    setNumeros(eval(numeros));
  }

  return (
    <>
      <h1>Calculadora</h1>
      <div className='caja'>
        <input type='text' value={resultado}></input>
        <table>
          <tr>
            <td><button className='operador' onClick={guardar_num} value='('>(</button></td>
            <td><button className='operador' onClick={guardar_num} value=')'>)</button></td>
            <td><button className='operador' onClick={guardar_num_porcentaje} value='%'>%</button></td>
            <td><button className='operador' onClick={reset}>AC</button></td>
          </tr>
          <tr>
            <td>
              <button className='numero' onClick={guardar_num} value='7'>7</button>
            </td>
            <td>
              <button className='numero' onClick={guardar_num} value='8'>8</button>
            </td>
            <td>
              <button className='numero' onClick={guardar_num} value='9'>9</button>
            </td>
            <td>
              <button className='operador' onClick={guardar_num} value='/'>÷</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className='numero' onClick={guardar_num} value='4'>4</button>
            </td>
            <td>
              <button className='numero' onClick={guardar_num} value='5'>5</button>
            </td>
            <td>
              <button className='numero' onClick={guardar_num} value='6'>6</button>
            </td>
            <td>
              <button className='operador' onClick={guardar_num} value='*'>*</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className='numero' onClick={guardar_num} value='1'>1</button>
            </td>
            <td>
              <button className='numero' onClick={guardar_num} value='2'>2</button>
            </td>
            <td>
              <button className='numero' onClick={guardar_num} value='3'>3</button>
            </td>
            <td>
              <button className='operador' onClick={guardar_num} value='-'>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className='numero' onClick={guardar_num} value='0'>0</button>
            </td>
            <td><button className='numero' onClick={guardar_num} value='.'>.</button></td>
            <td>
              <button className='igual' onClick={realizar} value='='>=</button>
            </td>
            <td>
              <button className='operador' onClick={guardar_num} value='+'>+</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
