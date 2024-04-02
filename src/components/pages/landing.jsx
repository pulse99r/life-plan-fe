import React from 'react';
import '../css/landing.css'

function Landing() {

  return (
    <div className='landing'>
      <section className='landing__header'>
        <span className='landing__logo'>Logo</span>
        <span className='landing__title'>Life Plan</span>
      </section>
      <section className='category-section'>
      
        <h6 className="navbar__item">About</h6>
        <h6 className="navbar__item">My Plans</h6>
        <h6 className="navbar__item">Connections</h6>
      </section>
    </div>
  );
}

export default Landing;

