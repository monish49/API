import React from   'react';
import {Link} from 'react-router-dom'
import './Nav_bar.css'

const Navbar=()=>{         //giving links to the created paths
    return  (
    <div><header>
        <h1>UDelights&#174;</h1>
    </header>
    <div className='menu0'>
    <nav>
        <div className='menu'>
        <ul>
            <li> <Link to="/"><button className='btn btn-primary'> Home</button></Link> </li>
            <li> <Link to="/form"><button className='btn btn-primary'>About</button></Link> </li>
            <li> <Link to="/post"><button className='btn btn-primary'>Contact</button></Link> </li>
        </ul>
         </div>
    </nav>
    </div>
    </div>
    )
}
export default Navbar;