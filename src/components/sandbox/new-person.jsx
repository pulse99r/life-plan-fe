import React, {useState} from 'react'
import '../css/new-person.css'


const NewPerson = () => {
  const [person, setPerson] = useState({
    first_name: "",
    last_name: "",
    email: ""
  })

  // function handleFirstNameChange(e) {
  //   let first_name = e.target.value
  //   setPerson({
  //     ...first_name,
  //     first_name: first_name
  //   })
  // }
  // function handleLastNameChange(e) {
  //   let first_name = e.target.value
  //   setPerson({
  //     ...person,
  //     first_name: first_name
  //   })
  // }
  function handleTextChange(e) {
    let change = e.target.value
    setPerson({
      ...person,
      [e.target.id]: change
    })
    console.log('first Name:', person.first_name, 'last Name: ', person.last_name)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://lochost:3024/people', {
      method: "POST",
      headers: {
        "content-Type": "application/json" 
      },
      body: JSON.stringify(person)
    }).then(() => {
      console.log('successfully submitted')
      
    })
   
  }


  return (
    <form className='new-person' onSubmit={handleSubmit}>
      <input type='text' placeholder='please enter first name' id="first_name" onChange={handleTextChange}></input>
      <input type='text' placeholder='please enter last name' id='last_name' onChange={handleTextChange}></input>
      <input type='text' placeholder='please enter email' id='email'></input>
      <button className='new-person__button'>submit</button>
    </form>
  )
}

export default NewPerson
