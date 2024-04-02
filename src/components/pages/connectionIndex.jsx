
import React, { useState, useEffect } from 'react'
import People from '../resources/people';


const ConnectionIndex = () => {
  const [ users, setUsers] = useState([])


  useEffect(()=>{
    fetch('http://localhost:3024/people')
    .then(response => response.json())
    .then(data => setUsers(data))
    // .then(data => console.log(data))
  }, [])
 
  console.log("users: ", users)

  return (
    <div>
      This is the connections page
      <div>
        {users.map((person) => {
          return (<People key={person.id} person={person}/>)
        })}
      </div>
    </div>
  )
}

export default ConnectionIndex
