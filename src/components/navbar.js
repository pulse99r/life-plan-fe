import React from 'react'
import { useState } from 'react';
import Slider from './slider';
import '../components/css/Navbar.css'

function Navbar() {

  const [slideDir, setSlideDir] = useState('sign-up')
  const [containerPosition, setContainerPosition] = useState([])

  const handleHover = (e) =>{
    console.log('mouseover event occurred!')
    e.preventDefault()
    // setSlideDir(e.target.getAttribute('className') === 'sign-up' ?  true : false) 
    setSlideDir(e.target.getAttribute('className') === 'sign-up' ?  'slide-left' : 'slide-right') 
    return setContainerPosition.children[0].setAttribute('className', slideDir ? 'slide-left' : 'slide-right')
  }

  return (
    <nav>
      <section className='main'>
        <h1>Life Plan</h1>
      </section>
      <section className='category-section'>
        <h6 className="navbar__item">About</h6>
        <h6 className="navbar__item">My Plans</h6>
        <h6 className="navbar__item">Connections</h6>
        <Slider onMouseOver={handleHover}/>
      </section>
    </nav>
  );
}

export default Navbar;