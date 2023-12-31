import React from 'react'
import Navbar from '../Navbar/Navbar'
import grayjoji from '../../assets/sketches/grayjoji.jpg'
import dominic from '../../assets/sketches/dominic.png'
import brock from '../../assets/sketches/brock.png'
import abstract from '../../assets/sketches/abstract.jpg'
import canvas from '../../assets/sketches/canvas.jpg'
import tea from '../../assets/sketches/tea.png'
import monk from '../../assets/sketches/monk.jpg'
import amitabh from '../../assets/sketches/amitabh.jpg'
import ryans from '../../assets/sketches/ryans.jpg'
import brutality from '../../assets/sketches/brutality.jpg'
import lupin from '../../assets/sketches/lupin.png'
import sacred from '../../assets/sketches/sacred.jpg'
import conception from '../../assets/sketches/conception.png'
import brockhampton from '../../assets/sketches/brockhampton.jpg'
import superteam from '../../assets/sketches/superteam.png'
import toucan from '../../assets/sketches/toucan.png'
import st from '../../assets/sketches/st.png'
import rk from '../../assets/sketches/rk.jpg'
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
            <img className='i6' src={tea} alt='tea' />
            <img className='i7' src={monk} alt='monk' />
            <img className='i8' src={amitabh} alt='amitabh' />
            <img className='i9' src={ryans} alt='ryans' />
            <img className='i10' src={brutality} alt='brutality' />
            <img className='i11' src={lupin} alt='lupin' />
            <img className='i13' src={conception} alt='conception' />
            <img className='i14' src={brockhampton} alt='brockhampton' />
            <img className='i15' src={superteam} alt='superteam' />
            <img className='i16' src={toucan} alt='toucan' />
            <img className='i17' src={rk} alt='rk' />
            <img className='i12' src={sacred} alt='sacred' />
            <img className='i18' src={st} alt='st' />
        </div>
    </>
  )
}

export default sketch