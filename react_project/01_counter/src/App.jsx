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
      updatedCount(--count)
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


    </>
  )
}

export default App
