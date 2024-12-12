import React, { Component } from 'react';
import './App.css';
import ClassCounter from "./component/classCounter"
import FunctionalCounter from "./component/functionalCounter"

class App extends  Component{

  //intialization
  constructor(){
    super();
    this.state = {
      inc : 1,
      dec : 0
    }
  }

  increment(){
    this.setState({inc : this.state.inc + 1})
  }

  decrement(){
    this.setState({dec : this.state.dec - 1})
  }

  power() {
    this.setState({inc : this.state.inc * 2})
  }
 
  componentDidMount(){
    console.log("componenetDidMount : When Component render first time")
  }

  //unmounting
  componentWillUnmount(){
    console.log("componentWillUnmount:Component Removed")
  }
  render() {
   return (
    <div className="app-container">
      <ClassCounter number = {this.state.inc}></ClassCounter>
    <FunctionalCounter  number = {this.state.dec}></FunctionalCounter> 
    <div className="button-container">
    <button onClick={() => this.increment()} className="button">Increment</button>
    <button onClick={() => this.decrement()} className="button">Decrement</button>
    <button onClick={() => this.power()} className="button">Power</button>
    </div>
  </div>
   );
  }
}

export default App;
