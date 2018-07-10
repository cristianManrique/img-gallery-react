import React, { Component } from 'react';
// css
import './assets/css/style.css';
// Routes
import Routes from './Routes';
// Component
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
  };
};

export default App;
