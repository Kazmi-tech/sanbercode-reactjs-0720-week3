import React, { Component } from 'react';
import './jam.css'
// class Timer extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             time : props.start,
//             color : "black"
//         }
//     }

//     //Lifecycle
//     componentDidMount(){
//         this.addInterval = setInterval( ()=> this.increase(), 1000)
//     }
    
//     componentWillUnmount(){
//         clearInterval(this.addInterval)
//     }
    
//     increase(){
//         //mengupdaate statenya tiap detik
//         this.setState((state, props) =>({
//             time: parseInt(state.time) - 1
//         }))
    
//     }
//     render(){
//         return (
//         <>
//         (this.state.time == 90 &&
//         <h1 style={{textAlign: "center", color: this.state.color}}>
//              {this.state.time}
//         </h1>
        
//         )
//         </>
//     )
        
//     } 
// }

// class LocalTime extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             Local :  props.toLocaleTimeString()
//         }
        
//     }
// }

// export class Clock extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Halo, dunia!</h1>
//           <h2>Ini {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
// }

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


