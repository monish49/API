import { useReducer } from "react";

const istate=0
const reducer=(state,action)=>{
    switch(action){
        case'increment':
        return state+1
        case'decrement':
        return state-1
        case'reset':
        return istate
        default:
        return state
    }
}

const Reducermain=()=>{
    const[count,dispatch]=useReducer(reducer,istate)
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch('increment')}>Inc</button>
             <button onClick={()=>dispatch('decrement')}>Dec</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}
export default Reducermain