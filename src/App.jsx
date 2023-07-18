import { useEffect, useState, useRef } from 'react'
import './App.css'
import { render } from 'react-dom'

function App() {

  const [ count, setCount ] = useState(0)
  const [ name, setName ] = useState("")

  const incCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  // Count renders with useEffect

  // const [ renders, setRenders ] = useState(0)
  const renderCount = useRef(0)

  // useEffect(() => {
  //   setRenders(prevRenders => prevRenders + 1)
  // })

  // ! Initial render triggers useEffect, triggers count, triggers useEffect... (infinite loop)

  /* 
    ? useRef
    * allows us to keep track of state without trigerring a re-render
    * an object with .current property
    * .current persists throughout the full component lifetime
    * .current is also mutable
  */

  useEffect(() => {
    renderCount.current += 1
  })


  return (
    <div className='main-container'>
      <div>
        <button onClick={incCount}>+</button>
        <span>{count}</span>
        <button onClick={decCount}>-</button>
      </div>
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your Name" />
        <p>My name is {name}</p>
      </div>
      <div>
        <h1>This page re-rendered {renderCount.current} times</h1>
      </div>
    </div>
  )
}

export default App
