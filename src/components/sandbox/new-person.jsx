import React, {useState} from 'react'
import '../css/new-person.css'


const NewPerson = () => {
  const [person, setPerson] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password_hash: '', 
    profile_img: '',
    profile_img_caption: '',
    dob_month: '',
    dob_day: '',
    dob_year: '',
    gender: '', 
    city: '', 
    state: '',
    zip_code: ''
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
    console.log('first Name:', person.first_name, 'last Name: ', person.last_name, 'email:',person.email, 'phone:', person.phone)
    console.log('password: ', person.password_hash, 'person.profile_img:', person.profile_img,'dob:',person.dob_year, 'gender:', person.gender, 'city:',person.city,'state:',person.state,'zip_code:',person.zip_code)
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

  // first_name, last_name, email, phone, password_hash, profile_img, dob_month, dob_day, dob_year, gender, city, state, zip_code)


  return (
    <form className='new-person' onSubmit={handleSubmit}>
      <input type='text' placeholder='please enter first name' id="first_name" onChange={handleTextChange}></input>
      <input type='text' placeholder='please enter last name' id='last_name' onChange={handleTextChange}></input>
      <input type='text' placeholder='please enter email' id='email' onChange={handleTextChange}></input>
      <input type='text' placeholder='please enter phone' id='phone' onChange={handleTextChange}></input>
      <input type='text' placeholder='update password' id='password_hash' onChange={handleTextChange}></input>
      <input type='text' placeholder='profile image' id='profile_img' onChange={handleTextChange}></input>
      <input type='text' placeholder='profile image caption' id='profile_img_caption' onChange={handleTextChange}></input>
      <input type='text' placeholder='Enter month of birth' id='dob_month' onChange={handleTextChange}></input>
      <input type='text' placeholder='Enter day of birth' id='dob_day' onChange={handleTextChange}></input>
      <input type='text' placeholder='Enter year of birth' id='dob_year' onChange={handleTextChange}></input>
      <input type='text' placeholder='gender' id='gender' onChange={handleTextChange}></input>
      <input type='text' placeholder='city' id='city' onChange={handleTextChange}></input>
      <input type='text' placeholder='state' id='state' onChange={handleTextChange}></input>
      <input type='text' placeholder='zip_code' id='zip_code' onChange={handleTextChange}></input>

      <button className='new-person__button'>submit</button>
    </form>
  )
}

export default NewPerson
