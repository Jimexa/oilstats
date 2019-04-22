import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Bars from './components/pages/Bars'
import Bars2 from './components/pages/Bars2'
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/bars" component={Bars}/>
          <Route path="/bars2" component={Bars2}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
