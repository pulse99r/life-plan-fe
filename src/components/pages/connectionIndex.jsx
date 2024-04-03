
import React, { useState, useEffect } from 'react'
import People from '../resources/people';
import '../css/connectionIndex.css'
import NewPerson from '../sandbox/new-person'

const ConnectionIndex = () => {
  const [ users, setUsers] = useState([])


  useEffect(()=>{
    fetch('http://localhost:3024/people')
    .then(response => response.json())
    .then(data => setUsers(data))
    // .then(data => console.log(data))
  }, [])
 
  // console.log("users: ", users)

  return (
    <div className='connections-box'>
      <section className='connections-box__people'>
        {users.map((person) => {
          let id = person.id
         return (<div >
            <People key={id} person={person}/> 
          </div>)
        })}
      </section>
      <section className='connections-box__new-person'>
        <NewPerson/>
      </section>
      
    </div>
  )
}

export default ConnectionIndex
