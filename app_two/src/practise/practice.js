import React,{useState} from 'react';

const Prac=()=>{
    const[n,setn]=useState(0)
    const[i,seti]=useState(1)

    const multiple=()=>{
        return n*5
        (console.log("hey there"))
    }

    return(
        <div>
            <p>Count + 2 : {n}</p>
            <p> Item * 10 : {i}</p>
           <p>{multiple}</p>
            <button className='btn btn-warning' onClick={()=>setn(n+2)}>Increment</button>
            <button className='btn btn-info' onClick={()=>seti(i*10)}>Item</button>
           
        </div>
    )
}
export default Prac