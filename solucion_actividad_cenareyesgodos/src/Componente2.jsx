import React from 'react';
import './componente.css';

function Componente2(reyes) {
    const comprar = () => {
      reyes.setTotal((e) => e + reyes.precio);
    }
  return (
    <div className='rey' style={{backgroundColor: reyes.color_style}}>
        <h2>{reyes.nombre}</h2>
        <img src={reyes.img_rey}></img>
        <div>
            Precio : {reyes.precio} <br/>
            <button onClick={comprar}>Comprar</button>
        </div>
    </div>
  )
}

export default Componente2;