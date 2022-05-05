import React, {useContext} from 'react'
import {Contexto} from './contexto/Contexto'

function pagina3() {
  const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{background: color}}>
      pagina3
    </div>
  )
}

export default pagina3