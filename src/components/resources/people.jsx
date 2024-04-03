import React from 'react'
import '../css/people.css'
// import kenti from '../img/kenti-guitar.jpg'

function People ({person}) {
  // console.log('People person: ',person)
  const {first_name, last_name, email} = person
  // console.log(first_name, last_name, email)
  // console.log({id}, person.first_name, person.last_name, person.email)
  return (
    <div className="card-container">
        <p className='name'>{first_name}</p>
        <p className='name'>{last_name}</p>
        <p className='email'>{email}</p>
    </div>
  )
}

export default People
