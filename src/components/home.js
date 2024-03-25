import React from 'react'
import Navbar from '../components/navbar'
import './css/home.css'
import GridIndex from './grid-index'
function Home ({fName, lName, home, agent}){
  return (
  <div className='home'>
    <Navbar/>
    <div>this is the home page</div>
    <GridIndex />
    {/* <div><hr></hr></div> */}
    <div>My name is {fName} {lName}</div>
    <div>I'm from {home}</div>
    <div> {agent ? 'I am a "00" agent': 'I am not any type of secret agent'}</div>
    {/* <div><hr></hr></div> */}
  </div>
  )
}
export default  Home