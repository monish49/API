import React,{useState} from 'react';
import Child3 from './child3';

const Bike_p=(props)=>{
    const[name,setName]=useState('Heavy_Bike')

    const update=()=>{
        setName('Medium Vehical')
    }

    return(
        <div>
            <h4 style={{color:'yellow',background:'lightblue'}}>Fuctional Component</h4>
            <h4>Feature is {name}</h4>
            <button type='button' onClick={()=>{update()}}>Update Name</button>
           <h4>(props) Edition is {props.modal}</h4>
           <Child3 name={name}/>
        </div>
    )
}
export default Bike_p;