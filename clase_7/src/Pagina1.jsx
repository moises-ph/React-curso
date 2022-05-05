import React, {useContext} from 'react'
import {Contexto} from './contexto/Contexto'

function pagina1() {
  const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{background: color}}>
      pagina1
    </div>
  )
}

export default pagina1