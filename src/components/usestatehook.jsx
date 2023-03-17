import { useState } from 'react'

import './App.css'

function App() {


const[befor,after]=useState("Hello vite")

const[noclick,click]=useState(0)

let changetxt=(event)=>{
  event.preventDefault();
  let changed=event.target.value
  after(changed)
}

let clickPlus=()=>{
click(noclick+1)

}
 
let clickminus=()=>{
  click(noclick-1)
  if(noclick===0){
    click(0)
  }
  else{
    click(noclick-1)
  }
}


  return (
    <>
    
    <div className="App">
      
      <input type="text" placeholder='type any thing' onChange={changetxt} />
      <h1>{befor} <img src="vite.svg" alt="" /></h1>
      
      <button onClick={clickPlus}>+</button>
      <h1>{noclick}</h1>
      <button onClick={clickminus}>-</button>

      <h1>you are ordering {noclick} items</h1>
      
  
    </div>
    <div className="con">

    </div>

    </>
   
  )
}

export default App
