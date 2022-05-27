import React from "react"; 

class Priya extends React.Component{
    render(){
        return(<div>
            This is from the Child-2 
            <h4> Name is {this.props.name} </h4>
            <h4> Hot scale is {this.props.any} </h4>


        </div>)
    }
}
export default Priya
