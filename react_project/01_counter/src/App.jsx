import { useState } from 'react'

import './App.css'

function App() {
  let [count, updatedCount] = useState(0);

  const addValue = ()=>{
    if(count < 20){
      updatedCount(++count)
    }
  }
  const subValue = ()=>{
    if(count>0){
      updatedCount( --count)
    }
  }

  return (
    <>
     <h1>Counter App</h1>
     <h3>Counter Value: {count}</h3>
     <br/> 
     <button onClick={addValue}>Increase</button>
     <br/> <br />
     <button onClick={subValue}>Decrease</button>

     <p>Learn React with Hitesh Sir |  <br /> <br />Create count app with Authentication max count 20 & min count 0</p>

    <footer> Day 2 of learing react | hooks - UseState
      
  <p>useState is a function take default value useState(0) and return array [defaultValue, setCounter]  <br /> <br /> setCounter() function inside ++count & -- count </p>    
   </footer>
    </>
  )
}

export default App
