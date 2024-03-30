import React from 'react'
import Navbar from '../components/navbar'
import './css/home.css'
import GridIndex from './grid-index'
import CollectNames from './CollectNames.jsx';
// import Catcher from './sandbox/catcher.jsx';
// import Thrower from './sandbox/thrower.jsx';
import  { useState } from 'react'

// * * * *  Not in use  * * * *
// import AddTwoNums from './sandbox/add-two-nums.js';

function Home ({fName, lName, home, agent}){
  // const [pitcherName, setPitcherName] = useState('Kenti')
  // const [catcherName, setCatcherName] = useState('Johnson')
  // const [ballThrown, setBallThrown] = useState('false')
  
  const playBall = (e) => {
    console.log('play ball!!')
    // console.log(pitcherName)
    // console.log(catcherName)
    
    
    // on click, ask, has the ball been thrown yet?

    // if the ball has been thrown (thrown = true):
    // call catcher to 'catch' the ball...say <catcher name> caught the ball
    // and set thrown to false...and ask has the ball been thrown yet.
    // next click  ask, has the ball been thrown yet?
    // thrown should be false...call pitcher to say <pitcher name> has thrown the ball

  }

  // const addPitcherName = (e) => {
  //   setPitcherName(e.target.value)
  //   console.log(pitcherName)
  // }
  // const addCatcherName = (e) => {
  //   setCatcherName(e.target.value)
  //   console.log(catcherName)
  // }

  return (
  <div className='home'>
    <Navbar/>
    <div>this is the home page</div>
    <GridIndex />
    <div><hr></hr></div>
    <div>My name is {fName} {lName}</div>
    <div>I'm from {home}</div>
    <div> {agent ? 'I am a "00" agent': 'I am not any type of secret agent'}</div>
    {/* <div><hr></hr></div> */}
    <CollectNames/>
    <hr></hr>
    {/* <div className='ball-game'>
      <form onSubmit={playBall}>

        <input id='pitcher' type='text' onChange={((e) => setPitcherName(e.target.value))} placeholder='Name of Pitcher'></input>
        <input id='catcher' type='text' onChange={((e) => setCatcherName(e.target.value))} placeholder='Name of Catcher'></input>
        <button type='submit'>Play Ball!!</button>
      </form>
    </div> */}
    <div>game-display</div>
    {/* <div className='game-display' ><Thrower name={pitcherName}/></div> */}
    {/* <AddTwoNums a={2} b={2}/> */}
  </div>
  )
}
export default Home