import { useState,useEffect } from "react";

const Useeff=()=>{
    const[num,setnum]=useState(0)

    useEffect(()=>{
        console.log('info')
    },[num])

    return(
        <div>
            <button onClick={()=>(setnum(num+2))} >Add</button>
            <button onClick={()=>(setnum(num-2))}>Eli</button>
            <h6>{num}</h6>
        </div>
    )
}
export default Useeff