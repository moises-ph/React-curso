import logo from './logo.svg';
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

  const borrar = (e) => {
    e.target.parentNode.style.display = 'none'
  }

  const resultado = reyes.filter(valor => valor.nombre.includes('g') == false)
    .map(valor => <div className='reyes'>{valor.nombre} 
      <button onClick={borrar}>Borrar</button>
    </div>);

  return (
    <>
      <h1>Actividad 2</h1>
      <div className='caja'>
        {resultado}
      </div>
    </>
  );
}

export default App;
