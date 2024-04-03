import React, { useState, useEffect } from 'react'
import '../css/login.css'

const Login = () => {
  
    const [slideElement, setSlidePosition] = useState('log-in')
    const [ hoverElement, setHoverElement ] = useState('log-in')
    const [ left, setLeft ] = useState(false)
  
    const handleHover = (e) =>{
      e.preventDefault()
      setHoverElement(e.target.getAttribute('class'))
      const slide = document.querySelector('#slide')

      setLeft(e.target.getAttribute('class') ==='log-in' ? false : true)

      if(hoverElement === 'sign-up'){
        slide.className = 'slide-left'
      } else {
        slide.className = 'slide-right'
      }
    }
    const handleSubmit = (e) => {

    }
    
  return (
    <div>
      this is the Login page
      <form className="login-form" onSubmit={handleSubmit}>
        <input className='username' placeholder='user name or email'></input>
        <input className='password' placeholder='password'></input>
        {/* <button type="button">login</button> */}
        <div className="container" onMouseOver={handleHover}>
          <div id='slide' className="slide-right"></div>
          <div className="sign-up">Sign Up</div>
          <div className="log-in">Log in</div>
        </div>
      </form>
    </div>
  )
}

export default Login