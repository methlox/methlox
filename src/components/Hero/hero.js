import React from 'react'
import './hero.css'
import chevdown from '../../assets/images/chevdown.svg'

function hero() {
  return (
    <div>
      <img src={chevdown} className='container'></img>
    </div>
  )
}

export default hero