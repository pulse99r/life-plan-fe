import React from 'react'
import { useState, useEffect } from 'react'
import People from '../resources/people';



function Connections () {

  const [people, setPeople] = useState([])
  // const [person, setPerson] = useState('')
  // console.log(people)

  useEffect  ( () => {
    fetch('http://localhost:3024/people')
    .then((response) => response.json())
    .then((peopleData) => {
      console.log(peopleData)
      setPeople(peopleData)
      //   .then((peopleData) => {setPeople(peopleData)
    })
    .catch((err) => console.log(err))
  },[])

  
  return (
    <div>
      This is the Connections Page
    
      {people.map((currentPerson) => {
        return <People person={currentPerson}/>
      })}
    </div>
  )
}

export default Connections