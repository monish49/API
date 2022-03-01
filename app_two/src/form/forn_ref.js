import { useEffect,useState,useRef } from 'react'

const Ref_form=()=>{
    const[uname,setuname]=useState('')
    const[lname,setlname]=useState('')
    const[err,seterr]=useState('')
    const[dark,setdark]=useState(false)

    const refname=useRef();
    const reflname=useRef();

    useEffect(()=>{
        refname.current.focus();
    })

    const subhandler=(e)=>{
        e.preventDefault();
    if(refname.current.value.length===0 && reflname.current.value.length===0){
        alert('Yo enter')
    }
    else{
        setuname(refname.current.value);
        setlname(reflname.current.value);
    }}

    return(
        <div>
        
            <form>
           <input type="text" ref={refname} placeholder="uname"/>
            <input  type="text" ref={reflname} placeholder="lname"/>
            <button onClick={subhandler}>Submit</button>
            </form>
            <p>{uname}</p>
            <p>{lname}</p>
        
        </div>
    )
}
export default Ref_form