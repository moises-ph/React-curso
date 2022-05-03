import React, {useState} from 'react';


function App() {
  const [numero1, setNumero1] = useState(null);
  const [numero2, setNumero2] = useState(null);
  const [operador, setOperador] = useState('');
  const [resultado, setResultado] = useState(0);


  const reset = () => {
    setNumero1(null);
    setNumero2(null);
    setOperador('');
    setResultado(0);
  }

  const guardar_num = (e) => {
    if(numero1 === null){
      setNumero1(Number(e.target.value));
      setResultado(e.target.value);
    }
    else if(operador === ''){
      setNumero2(Number(e.target.value));
      setResultado(resultado + e.target.value); 
    }
  };

  const operacion = (o) =>{
    setOperador(o.target.value)
    setResultado(resultado + o.target.value);
  }

  const realizar = () =>{
    const op = operador;
    if(op === '-'){
      setResultado( numero1 -  numero2);
    }
    else if( op === '+'){
      setResultado( numero1 + numero2);
    }
    else if( op === '*'){
      setResultado( numero1 * numero2);
    }
    else if( op === '/'){
      setResultado( numero1 / numero2);
    }
    else{
      setResultado('*INGRESE UNA OPERACION VALIDA*');
    }
  }

  return (
    <>
      <h1>Calculadora</h1>
      <input type='text' value={resultado}></input>
      <div>
        <table>
          <tr>
            <td>
              <button onClick={guardar_num} value='7'>7</button>
            </td>
            <td>
              <button onClick={guardar_num} value='8'>8</button>
            </td>
            <td>
              <button onClick={guardar_num} value='9'>9</button>
            </td>
            <td>
              <button onClick={operacion} value='-'>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={guardar_num} value='4'>4</button>
            </td>
            <td>
              <button onClick={guardar_num} value='5'>5</button>
            </td>
            <td>
              <button onClick={guardar_num} value='6'>6</button>
            </td>
            <td>
              <button onClick={operacion} value='+'>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={guardar_num} value='1'>1</button>
            </td>
            <td>
              <button onClick={guardar_num} value='2'>2</button>
            </td>
            <td>
              <button onClick={guardar_num} value='3'>3</button>
            </td>
            <td>
              <button onClick={operacion} value='*'>*</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={guardar_num} value='0'>0</button>
            </td>
            <td>
              <button onClick={realizar} value='='>=</button>
            </td>
            <td>
              <button onClick={operacion} value='/'>/</button>
            </td>
            <td>
              <button onClick={reset}>AC</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
