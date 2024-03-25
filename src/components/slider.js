
import React from 'react'
import './css/slider.css'

const Slider = () => {
  

  return (
    <div className="container">
      <div className="slide-right"></div>
      <div className="sign-up">Sign Up</div>
      <div className="log-in">Log in</div>
    </div>
  )
}

export default Slider


// function Slider() {

//   const container = document.querySelector('.container')

//   container.addEventListener('mouseover',(e)=>{
//     e.preventDefault()
//     let slideDir = e.target.getAttribute('class') === 'sign-up' ?  'slide-left' : 'slide-right' 
//     container.children[0].setAttribute('class', slideDir)
//   })

//   return (
//     <div class="container">
//       <div class="slide-right"></div>
//       <div class="sign-up">Sign Up</div>
//       <div class="log-in">Log in</div>
//     </div>
//   ) }

// export default Slider;