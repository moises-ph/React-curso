import React from 'react';
import './App.css';

function App() {
  const reyes = [
    {
      nombre: 'Atanagildo',
      reinado : 15,
      vacasComidas : 9
    },
    {
      nombre: 'Ervigio',
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: 'Ataúlfo',
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: 'Leovigildo',
      reinado: 18,
      vacasComidas: 3
    },
    {
      nombre: 'Sisebuto',
      reinado: 19,
      vacasComidas: 13
    },
    {
      nombre: 'Recesvinto',
      reinado: 19,
      vacasComidas: 11
    },
    {
      nombre: 'Teodorico',
      reinado: 33,
      vacasComidas: 12
    }
  ]

  

  const resultado = reyes.filter(valor=> 
    valor.nombre.includes('g') == false).map(valor => {
    const source = 'https://www.html6.es/img/rey_' + valor.nombre.toLowerCase() + '.png';
    const total_vacas = valor.reinado * (valor.vacasComidas * 360);
    return <div key={valor.nombre} className='rey'>
      <div><span className='nombre_rey'>{valor.nombre.toUpperCase()}</span>
       ha comido {total_vacas} vacas en sus {valor.reinado} años de reinado</div>
      <img src= {source}/>
    </div>;
  });
  return (
    <>
    <h1>Actividad 1.</h1>
      <div className='caja'>
        {resultado}
      </div>
    </>
  )
}

export default App