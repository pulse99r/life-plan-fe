import React from 'react';
import '../css/landing.css'
import Navbar from './navbar'
import centralPark from '../img/central-park.jpg'

function Landing() {

  return (
    <div className='landing'>
      <section className='landing__header'>
        <span className='landing__logo'>Logo</span>
        <span className='landing__title'>Life Plan</span>
      </section>
      <section className='category-section'>
        <Navbar/>
      </section>
      <section className='landing-img-container'>
        <img src={centralPark} alt="Central Park" className='landing-img'/>
        <div className='landing-img__text'>
          <p className='blurb'>This really is 4 <strong>your</strong> life</p>
          <p className='cta'>Take Control</p>
        </div>
      </section>
      <section className='landing__info'>
        <p className='landing__info__header'>How do I take control?</p>
        <article className='landing__info__group'>
          <p className='landing__info__item'>lorem ipsum aand such and such</p>
          <p className='landing__info__item'>lorem ipsum aand such and such</p>
          <p className='landing__info__item'>lorem ipsum aand such and such</p>
          <p className='landing__info__item'>lorem ipsum aand such and such</p>
        </article>
        <p className='landing__info__header'>What does Life Plan make possible?</p>
        <article className='landing__info__group'>
          <p className='landing__info__item'>lorem ipsum aand such and such</p>
          <p className='landing__info__item'>lorem ipsum aand such and such</p>
          <p className='landing__info__item'>lorem ipsum aand such and such</p>
          <p className='landing__info__item'>lorem ipsum aand such and such</p>
        </article>
      </section>
    </div>
  );
}

export default Landing;

