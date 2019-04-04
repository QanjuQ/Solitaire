import React, { Component, Fragment} from 'react';
import './App.css';
import {Foundations,Tabeleau,Stock} from './components.js';
import createGame from './game.js';


class Game extends Component{
  constructor(props) {
    super(props);
    this.state = {game: props.game};
    this.open = this.open.bind(this);
    this.move = this.move.bind(this);
    this.refreshStock = this.refreshStock.bind(this);
  }

  open(event) {
    if(this.state.game.stock.allOpened){
      this.open = null;
    }
    this.setState({state:this.state.game.openCard()});
  }

  refreshStock(event) {
    this.setState(this.state.game.refreshStock());
  }

  move(event) {
    
  }

  render() {
    let state = this.state.game.state();
    return (
      <Fragment>
      <Stock onClick = {this.open} stock = {state.stock} refresh = {this.refreshStock}/>
      <Tabeleau piles = {state.tableau} move = {this.move}/>
      <Foundations pillars = {state.foundation}/>  
      </Fragment>
      );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Game game= {createGame()}/>
      </div>
    );
  }
}

export default App;
