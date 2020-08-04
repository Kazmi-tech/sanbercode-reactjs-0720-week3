import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time : props.start
        }
    }

    //Lifecycle
    componentDidMount(){
        this.addInterval = setInterval( ()=> this.increase(), 1000)
    }
    
    
    componentWillUnmount(){
        clearInterval(this.addInterval)
    }
    
    increase(){
        //mengupdaate statenya tiap detik
        this.setState((state, props) =>({
            time: parseInt(state.time) - 1
        }))
    
    }
    render(){
        return (
        <span> {this.state.time} detik</span>
        )
    } 
}

// class LocalTime extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             Local :  props.toLocaleTimeString()
//         }
        
//     }
// }

// class Timer extends Component{
//     constructor(props){
//       super(props)
//       this.state = {
//         time: 0
//       }
//     }
  
//     componentDidMount(){
//       if (this.props.start !== undefined){
//         this.setState({time: this.props.start})
//       }
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
  
//     componentWillUnmount(){
//       clearInterval(this.timerID);
//     }
  
//     tick() {
//       this.setState({
//         time: this.state.time + 1 
//       });
//     }
  
  
//     render(){
//       return(
//         <>
//           <h1 style={{textAlign: "center"}}>
//             {this.state.time}
//           </h1>
//         </>
//       )
//     }
//   }
export default Timer