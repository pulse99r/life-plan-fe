
import React, { useState, useEffect } from 'react'
import People from '../resources/people';

const connectionIndex = () => {

  useEffect(()=>{
    fetch('http://localhost:3024/people')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])


  return (
    <div>
      This is the connections page
    </div>
  )
}

export default connectionIndex
