
import React from 'react';
// import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {

  return (
    <nav>
      <section className='category-section'>
        <h6 className='navbar__item'>About</h6>
        <h6 className='navbar__item'>My Plans</h6>
        <h6 className='navbar__item'>Connections</h6>
        <h6 className='navbar__item'>Resources</h6>
        <span className='right-side'>
          <span className='navbar__item email-icon'>mail icon</span>
          <span className='navbar__item alert-icon'>alert icon</span>
          <span className='navbar__item profile-icon'>profile icon</span>
          <span className='navbar__item login'>Login</span>
        </span>
      </section>
    </nav>
  );
}

export default Navbar;