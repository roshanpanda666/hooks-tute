
import { useState } from 'react'
import { useEffect } from 'react'
import Confetti from 'react-confetti'
import axios from 'axios';

import './App.css'

function App() {


const[befor,after]=useState("Hello vite")
const[noclick,click]=useState(0)
const[bool,nullbool]=useState(true)

let changetxt=(event)=>{
  event.preventDefault();
  let changed=event.target.value
  after(changed)
}

let clickPlus=()=>{
click(noclick+1)
nullbool(!bool)
}
 


  return (
    <>
    
    <div className="App">
      
      <input type="text" placeholder='type any thing' onChange={changetxt} />
      <h1>{befor}</h1>
      <h1>{noclick}</h1>
      <button onClick={clickPlus}>incress</button>
      {bool && <p>boolean</p>}  

      
      
  
    </div>
    <div className="con">
    <Confetti
    width={300}
    height={300}
    />
    </div>

    </>
   
  )
}

export default App
