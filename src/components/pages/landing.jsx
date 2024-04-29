import React from 'react';
import '../css/landing.css'
import Navbar from './navbar'
import centralPark from '../img/central-park.jpg'
import logo from '../img/IMG_3586.jpg'
import PageHeader from './page-header.jsx'

function Landing() {

  return (
    <div className='landing'>
      <PageHeader/>
      <Navbar/>
      <section className='landing-img__container'>
        <img src={centralPark} alt="Central Park" className='landing-img'/>
        <div className='landing-img__text'>
          <p className='blurb'>This really <strong>is </strong>your life</p>
          <p className='cta'>Take Control!</p>
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

