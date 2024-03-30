import React, { useState } from 'react'

const CollectNames = () => {
  const [name, setName] = useState("Chatgpt")

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e)
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter your name'/>
      <button type='submit'>submit form</button>
    </form>
  )
}

export default CollectNames
