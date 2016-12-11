import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      fishes: {},
      order:  {}
    }
  }

  addFish(fish) {
    //update state
    const copyoffishes = {...this.state.fishes};
    //this.state.fishes.fish1 = fish;
    // add in our new fish
    const timestamp = Date.now();
    copyoffishes['fish-' + timestamp] = fish;
    // set state
    this.setState({fishes: copyoffishes})
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;