import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function change(e){
  let m =e.target.value
  console.log(m)
  document.body.style.background=m

  }

  return (
    <>
     <h2>Background colour changer</h2>
     <input type="color"  onChange={(e)=>change(e)
     }/>
     
    
    </>
  )
}

export default App
