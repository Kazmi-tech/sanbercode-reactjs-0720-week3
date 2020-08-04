import React, { Component } from 'react';
import './jam.css'


export class Timer extends Component{
    constructor(props){
      super(props)
      this.state = {
        date: new Date(),
        time: 0
      }
    }
  
    componentDidMount(){
      if (this.props.start !== undefined){
        this.setState({time: this.props.start})
      }
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        time: this.state.time - 1 
      });
    }
    
    
    render(){
        return (
        <>
        {this.state.time >= 0 &&
        <h1 style={{textAlign: "center"}}>
             <span class="jam"> sekarang jam : {this.state.date.toLocaleTimeString()}</span>Hitung mundur : {this.state.time}
        </h1>
        
        }
        </>
    )
        
} 
}


