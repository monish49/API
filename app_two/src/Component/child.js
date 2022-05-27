import React from "react";

class Child extends React.Component{
  render(){
    return(
      <div>
        <h4 style={{color:'violet',background:'green'}}>Child Class</h4>
       <h5> And the name is {this.props.name}</h5>
       <h5>And the sex is {this.props.prop1}</h5>
      </div>
    )
  }
}
export default Child;
