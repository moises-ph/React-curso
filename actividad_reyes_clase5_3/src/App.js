import react from 'react';
import './App.css';
import {useState } from 'react';

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
  ];

  const resultado = reyes.find(valor => valor.nombre.includes('3') || valor.nombre.includes('E'))
    .map(valor =>{
      <div>{valor.nombre}</div>
    });

  return (
    <>
      <div>
        {resultado}
      </div>
    </>
  );
}

export default App;
