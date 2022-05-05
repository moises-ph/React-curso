import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [chistes, setChistes] = useState([]);

  const url = 'https://api.icndb.com/jokes/';
  const peticion = fetch(url);

  useEffect(() => {
    peticion
    .then(response => response.json())
    .then(data => {
      data.value.map(chiste => {
        setChistes(e => [...e,<div className='chiste' key={chiste.id}>{chiste.id} {chiste.joke}</div>]);  
      })
    })
    .catch(error => console.log('Error: ', error));
  }, []);



  return (
    <>
    <div>{chistes}</div>
    </>
  )
}

export default App