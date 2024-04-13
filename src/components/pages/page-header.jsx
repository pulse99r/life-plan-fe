import React from 'react'
import logo from '../img/IMG_3586.jpg'
import '../css/page-header.css'


const PageHeader = () => {
  return (
    <div>
      <section className='landing__header'>
        <img className='landing__logo' src={logo} alt="" ></img>
        <span className='title-group'>
          <span className='landing__title'>Life Plan</span>
          <span className='motto'>A life on track</span>
        </span>
      </section>
    </div>
  )
}

export default PageHeader
