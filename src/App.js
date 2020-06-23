import React, { Component } from 'react';
import logo from './logo.svg';
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import './App.css';

class App extends Component {
  state = {
    username: ''
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserOutput />
        <UserInput />
      </div>
    );
  }
}

export default App;