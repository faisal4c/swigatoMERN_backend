import React from 'react'
import Navbar from '../components/Navbar'
import clocheUpper from '../images/cloche-upper.png'
import clocheLower from '../images/cloche-lower.png'
import './ContactDeveloper.css'

export default function ContactDeveloper() {
  return (
    <>
        <Navbar/>
        <div className='contact-developer'>
            <div className='images'>
                <img className='upper' src={clocheUpper}/>
                <img  className='lower'src={clocheLower}/>
            </div>
            <div className='links'>
                <p>Mohd Faisal</p>
                <a href='https://www.linkedin.com/in/faisal001/' target="_blank">LikedIn</a>
            </div>
        </div>
    </>

  )
}
