import React, {useContext} from 'react'
import {Contexto} from './contexto/Contexto'

function pagina2() {
  const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{background: color}}>
      pagina2
    </div>
  )
}

export default pagina2