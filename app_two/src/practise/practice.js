import { useState,useEffect } from "react"

const Prac=()=>{
    const[n,setn]=useState(0)
    const z=0
    
    useEffect(()=>{
        console.log('componentdidupdate')
    },[n])
    

    return(
        <div>
            <p>{n}</p>
            <button onClick={()=>setn(n+1)}>Increment</button>
            <button onClick={()=>setn(n-1)}>Decrement</button>
            <button onClick={()=>setn(z)}>Reset</button>
        </div>
    )
}
export default Prac