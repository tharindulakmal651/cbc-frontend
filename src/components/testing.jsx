import { useState } from "react"
import "./testing.css"

export default function Testing() {
   const [count, setCount] = useState(0)
   const [name,setName] = useState("Tharindu")
   
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

function changeName(value) {
     setName(value)
}


  return (
    <div className="background">
      <h1>{name}</h1>

      <button className="val" onClick={decrement}> - </button>
      <span> {count}</span>
      <button className="val" onClick={increment}> + </button>
    
      <div className="button-panel">
            <button onClick={()=>changeName("Students")}> Student</button>
            <button onClick={()=>changeName("Teacher")}> Teacher</button>   
            <button onClick={()=>changeName("Admins")}> Admin</button>
        </div>


    </div>
  )
}
