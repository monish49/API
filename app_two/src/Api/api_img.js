import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
// import './api.css'
import './store.css'

const Api_store=()=>{
    const[list,setlist]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((info2)=>{
            setlist(info2.data)
            console.log(info2)
        })
    },[])

    return(
        <div className="wholepage">
            {
            list.slice(0,30).map(({image,title,price})=>
            <section className="whole">
            <article className='store'>
            <img src={image} width="130px" height="190px" alt="" />
            <h6> {title} </h6>
            <h6>{price}</h6>
            </article>
            </section>
    )}
        </div>
    )
}
export default Api_store