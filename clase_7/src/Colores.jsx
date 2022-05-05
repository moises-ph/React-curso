import React, {useContext} from 'react'
import {Contexto} from './contexto/Contexto'

function Colores() {
    const {setColor} = useContext(Contexto)
  return (
    <div className='colores'>
        <div onClick={() => setColor('#4285f4')} className='color'></div>
        <div onClick={() => setColor('#ea4335')} className='color'></div>
        <div onClick={() => setColor('#fbbc05')} className='color'></div>
        <div onClick={() => setColor('#34a853')} className='color'></div>
    </div>
  )
}

export default Colores