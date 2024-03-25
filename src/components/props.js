
import React from 'react'

const Props = ({fName, lName, home, agent}) => {
  return (
    <div>
      <div>My name is {fName} {lName}</div>
      <div>I'm from {home}</div>
      <div> {agent ? 'I am a "00" agent': 'I am not any type of agent'}</div>
      <div><hr></hr></div>
    </div>
  )
}

export default Props
