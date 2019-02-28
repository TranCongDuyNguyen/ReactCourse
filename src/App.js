import React, { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';
const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: GREEN
    }

    setInterval(() => {
      this.setState({
        color: this.changeColor(this.state.color)
      });
    }, 2000);
  };

  changeColor(color){
    switch(color){
      case RED:
        return GREEN;
      case YELLOW:
        return RED;
      case GREEN:
        return YELLOW;
      default:
        return GREEN;
    }
};
  render() {
    let { color } = this.state;
    return (
      <div className="App">
        <TrafficLight color = { color }/>
      </div>
    );
  }
}

export default App;
