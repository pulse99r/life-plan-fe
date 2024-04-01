
import React from 'react';
// import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {

  return (
    <nav>
      <section className='main'>
        <h1>Life Plan</h1>
      </section>
      <section className='category-section'>
      
        <h6 className="navbar__item">About</h6>
        <h6 className="navbar__item">My Plans</h6>
        <h6 className="navbar__item">Connections</h6>
      </section>
    </nav>
  );
}

export default Navbar;