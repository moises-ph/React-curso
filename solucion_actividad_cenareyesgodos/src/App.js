import Componente2 from './Componente2';
import './App.css';
import Atanagildo from './imagenes/rey_atanagildo.png';
import Ataulfo from './imagenes/rey_ataulfo.png';
import Ervigio from './imagenes/rey_ervigio.png';
import Leogivildo from './imagenes/rey_leogivildo.png'
import Recesvinto from './imagenes/rey_recesvinto.png';
import Sisebuto from './imagenes/rey_sisebuto.png';
import { useState } from 'react';

function App() {
  const reyes = [
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]
  const [total, setTotal] = useState(0);
  return (
    <>
      <h1>Total a pagar: {total}€</h1>
      <div className="cajacentral">
        <Componente2 img_rey={Atanagildo} nombre={reyes[0].nombre} color_style = {reyes[0].color} precio={reyes[0].precio} setTotal={setTotal}/>
        <Componente2 img_rey={Ervigio} nombre={reyes[1].nombre} color_style = {reyes[1].color} precio={reyes[1].precio} setTotal={setTotal}/>
        <Componente2 img_rey={Ataulfo} nombre={reyes[2].nombre} color_style = {reyes[2].color} precio={reyes[2].precio} setTotal={setTotal}/>
        <Componente2 img_rey={Leogivildo} nombre={reyes[3].nombre} color_style = {reyes[3].color} precio={reyes[3].precio} setTotal={setTotal}/>
        <Componente2 img_rey={Recesvinto} nombre={reyes[4].nombre} color_style = {reyes[4].color} precio={reyes[4].precio} setTotal={setTotal}/>
        <Componente2 img_rey={Sisebuto} nombre={reyes[5].nombre} color_style = {reyes[5].color} precio={reyes[5].precio} setTotal={setTotal}/>
      </div>
    </>
  );
}

export default App;
