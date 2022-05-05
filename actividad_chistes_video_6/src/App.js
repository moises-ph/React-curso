import React, {useEffect, useState} from 'react';

function App() {
  const [chiste, setChiste] = useState('');
  const url = 'https://api.icndb.com/jokes/random';
  const peticion = fetch(url);
  const [repetir, setRepetir] = useState(0);

  useEffect(() =>{
    peticion.
    then(datos => datos.json())
    .then(lectura =>{
      setChiste(
      <div key={lectura.value.id}>{lectura.value.joke}</div>);
      console.log(lectura.value.id);
    });
  }, [repetir]);


  return (
    <>
    <h1>Chiste</h1>
    <div>{chiste}</div>
    <button onClick={() => setRepetir(repetir+1)}>Otro chiste</button>
    </>
  )
}

export default App
