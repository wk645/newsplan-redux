import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Custom from './components/Custom';
import { Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {

  state = {

  };

  render() {
    
    return (
      <div className="AppFile">
      	<Navbar />
      	<Route exact path="/news" component={Custom} />
      	<Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
