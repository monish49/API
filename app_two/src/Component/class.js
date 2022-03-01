import React from "react";
import Child from "./child";
import Child2 from "./child2";

class Series extends React.Component{   //class spelling wroung
    constructor(props){
        super(props)
        this.state={
            name:'Tokyo',
            sex:'Female',
            hot:'Ohh Yeah',
            count:1
        }
    }

        update(){
            this.setState({
                sex:'sexy',
                hot:'ohh gooood',
                name:'Monica'
                 
            })
        }

        count(){
            this.setState({
                count:this.state.count+1
            })
        }

      render(){
           return (
                <div>
                    <h3 style={{color:'red',background:'grey'}}>Class Component</h3>
                    <h4> name is {this.state.name} </h4>
                    <h4>  Scale {this.state.hot} </h4>
                    <button type="button" onClick={()=>{this.update()}}>Current One</button>
                    <h4>{this.state.count}</h4>
                    <button type="button" onClick={()=>{this.count()}}>Her Count</button>

                    <Child name={this.state.name} sex={this.state.sex}/>
                    <Child2 name={this.state.name} hot={this.state.hot}/>
                    <p>props from the app.js:{this.props.name}</p> 
                </div>
            )
            }// so im class property assigned in component is refered as this.props.property
    }
    export default Series;