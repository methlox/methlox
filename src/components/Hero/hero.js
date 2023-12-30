import React from 'react'
import hiro from '../../assets/hero.jpg'
import './hero.css'

function hero() {
  return (
    <div>
        <img className='bg' src={hiro} alt='hero' />
    </div>
  )
}

export default hero