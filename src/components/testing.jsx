import { useState } from "react"
import "./testing.css"

export default function Testing() {
   const [count, setCount] = useState(0)
   const[name, setName] = useState("Tharindu")
   
   function increment() {
    if(count < 10) {
    setCount(count + 1)
    console.log(count + 1)
   }}


    function decrement() {
     if(count > 0) {
    setCount(count - 1)
    console.log(count - 1)
     } 
}


  return (
    <div className="background">
      <h1>{name}</h1>

      <button onClick={decrement}> - </button>
      <span> {count}</span>
      <button onClick={increment}> + </button>
    
      <div className ="button - panel">
            <button> Student</button>
            <button> Teacher</button>   
            <button> Admin</button>
        </div>


    </div>
  )
    }
