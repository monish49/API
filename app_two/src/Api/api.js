import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import './api.css'

const Api=()=>{
    const[list,setlist]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((information)=>{
            setlist(information.data)
            console.log(information)
        })
    },[])

    return(
    <div>
        <h3>Application Programming Interface</h3>
        <h5>Properties of an object in table formate</h5>
        <table cellSpacing="10" cellPadding="10">   
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>PostId</th>
                <th>Email</th>
                
            </tr>
        {
            list.slice(0,9).map(({id,name,postId,email})=>
            
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{postId}</td>
                <td>{email}</td>
            </tr>)}
            </table>
            
            
    </div>
    )
}
export default Api