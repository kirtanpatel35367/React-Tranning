import React, { Component } from 'react'

export default class Task4 extends Component {
    constructor(props){
        super(props)
    }

    state ={
        count:0,
    }

    Increment(){
        this.setState({count:this.state.count+1})
    }

    Decrement(){
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
        else{
            this.Reset.bind(this)
        }
    }

    Reset(){
        this.setState({count:0})
    }

  render() {
    return (
      <>
        <div id='counterBody'>
                <h1>{this.state.count}</h1>
            <div className="buttonList">
                <button onClick={()=>{this.Increment()}}>Increment</button>
                <button onClick={()=>{this.Decrement()}}>Decrement</button>
                <button onClick={()=>{this.Reset()}}>Reset</button>
            </div>    
        </div>
      </>
    )
  }
}
