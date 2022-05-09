import React, {useState} from 'react';
import './App.css';


function App() {
  const [numeros, setNumeros] = useState('');
  const [resultado, setResultado] = useState('0');
  const [lastnum, setLastnum] = useState('');
  const [ans, setAns] = useState('0');

  const keyinput = e => {
    const tecla = e.key;
    console.log(tecla);
    if(tecla === 'Enter'){
      realizar();
    }
    else if(tecla === 'Backspace'){
      borrar();
    }
    else if(tecla === 'Escape'){
      reset();
    }
    else if(tecla === '+' || tecla === '-' || 
    tecla === '*' || tecla === '/' || tecla === '.' || 
    tecla === '1' || tecla === '2' || tecla === '3' || 
    tecla === '4' || tecla === '5' || tecla === '6' || 
    tecla === '7' || tecla === '8' || tecla === '9' || tecla === '0'){ 
      setNumeros(numeros + tecla); 
      if(resultado === '0'){
        setResultado(tecla);
      }
      else if(resultado !== '0'){
        setResultado(resultado + tecla); 
      }
    }
    else if(tecla === '!'){
      factorial();
    }
  }

  const borrar = () => {
    setNumeros(numeros.slice(0, -1));
    setResultado(numeros);
  }

  const reset = () => {
    setResultado('0');
    setNumeros('');
    setLastnum('');
  }

  const factorial = () => {
    let numero = parseInt(lastnum);
    let fact = '';
    for(let i = 1; i <= numero; i++){
      fact += i.toString() + '*';
    }
    console.log(numeros.slice(0, -(numero.length)) + fact.slice(0, -1))
    setNumeros(numeros.slice(0, -(numero.length)) + fact.slice(0, -1));
    setResultado(resultado + '!');
  }

  const guardar_num_porcentaje = () => {
    setNumeros(numeros + '/100');
    setResultado(resultado + '%');
  }
  

  const logaritmo_baseX = () => {
    let lastnum_l = lastnum.length;
    let logaritmo = 'Math.log10(' + lastnum + ')';
    setNumeros(numeros.slice(0, -(lastnum_l)) + logaritmo);
    setResultado(resultado.slice(0,-(lastnum_l)) + 'log'+ '(' +lastnum + ')');
  }

  const raiz_cuadrada = () => {
    let lastnum_l = lastnum.length;
    let raiz_cuadrada = 'Math.sqrt(' + lastnum + ')';
    setNumeros(numeros.slice(0, -(lastnum_l)) + raiz_cuadrada);
    setResultado(resultado.slice(0,-(lastnum_l)) + '√'+ '(' +lastnum + ')');
  }

  const logaritmo_nat = () => {
    let lastnum_l = lastnum.length;
    let logaritmo = 'Math.log(' + lastnum + ')';
    setNumeros(numeros.slice(0, -(lastnum_l)) + logaritmo);
    setResultado(resultado.slice(0,-(lastnum_l)) + 'ln'+ '(' +lastnum + ')');
  }

  const guardar_num = (e) => {
    if(e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === '/' || e.target.value === 'ln'){
      setLastnum('');
    }
    else{
      setLastnum(lastnum + e.target.value );
    }
    setNumeros(numeros + e.target.value); 
    if(resultado === '0'){
      setResultado(e.target.value);
    }
    else if(resultado !== '0'){
      setResultado(resultado + e.target.value); 
    }
    console.log(lastnum)
  };

  const realizar = () =>{
    setAns(eval(numeros));
    setResultado(eval(numeros));
    setNumeros(eval(numeros));
    console.log(eval(numeros));
  }

  return (
    <>
      <h1>Calculadora</h1>
      <div className='caja'>
        <div className='display'>
          <div className='ANS'>Ans = {ans}</div>
          <input readOnly onKeyDown={keyinput} type='text' value={resultado}></input>
          </div>
        <table>
          <tr>
            <td><button className='operador' onClick={factorial} value='!'>x!</button></td>
            <td><button className='operador' onClick={guardar_num} value='('>(</button></td>
            <td><button className='operador' onClick={guardar_num} value=')'>)</button></td>
            <td><button className='operador' onClick={guardar_num_porcentaje} value='%'>%</button></td>
            <td><button className='operador' onClick={reset}>AC</button></td>
          </tr>
          <tr>
            <td><button className='operador' onClick={logaritmo_nat} value='ln'>ln</button></td>
            <td><button className='numero' onClick={guardar_num} value='7'>7</button></td>
            <td><button className='numero' onClick={guardar_num} value='8'>8</button></td>
            <td><button className='numero' onClick={guardar_num} value='9'>9</button></td>
            <td><button className='operador' onClick={guardar_num} value='/'>÷</button></td>
          </tr>
          <tr>
            <td><button className='operador' onClick={logaritmo_baseX}>log</button></td>
            <td><button className='numero' onClick={guardar_num} value='4'>4</button></td>
            <td><button className='numero' onClick={guardar_num} value='5'>5</button></td>
            <td><button className='numero' onClick={guardar_num} value='6'>6</button></td>
            <td><button className='operador' onClick={guardar_num} value='*'>*</button></td>
          </tr>
          <tr>
            <td><button className='operador' onClick={raiz_cuadrada} value='√'>√</button></td>
            <td><button className='numero' onClick={guardar_num} value='1'>1</button></td>
            <td><button className='numero' onClick={guardar_num} value='2'>2</button></td>
            <td><button className='numero' onClick={guardar_num} value='3'>3</button></td>
            <td><button className='operador' onClick={guardar_num} value='-'>-</button></td>
          </tr>
          <tr>
            <td></td>
            <td><button className='numero' onClick={guardar_num} value='0'>0</button></td>
            <td><button className='numero' onClick={guardar_num} value='.'>.</button></td>
            <td><button className='igual' onClick={realizar} value='='>=</button></td>
            <td><button className='operador' onClick={guardar_num} value='+'>+</button></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App