import React, { Component } from 'react';
import './App.css';
import './assets/css/style.css';
import Routes from './Routes';
//components
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="pt50">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
