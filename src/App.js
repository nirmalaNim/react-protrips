import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import AddTrip from './Components/AddTrip';
import List from './Components/List';
import Top from './Components/Top';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      trips :[
        { date: "2017-01-10", place: "Manali", type: "trek" },
        { date: "2017-04-05", place: "Mumbai", type: "club" },
        { date: "2017-02-09", place: "Marina", type: "tropic" },
        { date: "2020-10-21", place: "Coimbatore", type: "trek" }
      ]
    }
  }
  addTrip = (newTrips) => {
    this.setState({
      trips: [...newTrips]
    })
  }
 render(){
  return (
    <>
    <Router>
      
      <div className='app'>
      <Top/>
        <Switch>
          <Route exact path='/'><Home trips={this.state.trips}/></Route>
          <Route path='/addtrip'><AddTrip addTrip={this.addTrip} trips={this.state.trips}/></Route>
          <Route path='/list'><List trips={this.state.trips}/></Route>
        </Switch>
      </div>
    </Router>
    </>
  );
 }
}

