import React from 'react'
import Navbar from '../Navbar/Navbar'
import grayjoji from '../../assets/sketches/grayjoji.jpg'
import dominic from '../../assets/sketches/dominic_fike.png'
import brock from '../../assets/sketches/brock.png'
import abstract from '../../assets/sketches/Abstract_Sci-fi.jpg'
import canvas from '../../assets/sketches/canvas.jpg'
import './sketch.css'

function sketch() {
  return (
    <>
        <Navbar />
        <div className='container'>
            <img className='i1' src={grayjoji} alt='grayjoji'/>
            <img className='i2' src={dominic} alt='dominic'/>
            <img className='i3' src={brock} alt='brock' />
            <img className='i4' src={abstract} alt='abstract' />
            <img className='i5' src={canvas} alt='canvas' />
        </div>
    </>
  )
}

export default sketch