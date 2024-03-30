import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

    useEffect  ( () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      // try {
      //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
      //   const data = await response.json()
      //   console.log(data)
      // } catch {
      // }
    },[counter]) // dependency array

  return (
    <div>
      <h1>This is your brain on useEffect</h1>
      <button type='button' onClick={() => setCounter(counter +1)}>Counter</button>
      <h1>{counter}</h1>
      <button type='button' onClick={() => setCounter2(counter2 +1)}>Counter 2</button>
      <h1>{counter2}</h1>
    </div>
  )
}

export default Counter
