import { useReducer } from "react";
import imgoff from './offb.jpg'
import vol1 from './bvol1.jpg'
import vol2 from './bvol2.jpg'
import vol3 from './bvol3.jpg'
import './bulb.css'

const initial=imgoff
const reducer=(state,action)=>{
    switch(action){
        case'off':
        return imgoff
        case'vol1':
        return vol1
        case'vol2':
        return vol2
        case'vol3':
        return vol3
        default:
        return imgoff
    }
}

const Mainbulb=()=>{
    const[img,dispatch]=useReducer(reducer,initial)
    return(
        <div>
            <div className="img-container">
            <img src={img} />
            </div>
            <div className="btn">
            <button className="btn primary" onClick={()=>dispatch('off')}>Off</button>
            <button className="btn success" onClick={()=>dispatch('vol1')}>10 Volts</button>
            <button className="btn info" onClick={()=>dispatch('vol2')}>20 Volts</button>
            <button className="btn danger" onClick={()=>dispatch('vol3')}>40 Volts</button>
            </div>
        </div>
    )
}
export default Mainbulb

