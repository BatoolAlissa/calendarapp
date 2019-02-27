import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import External from './components/External';

class App extends Component {
  render() {
    return (
      <div className="App">
        <External />
        <Calendar />
      </div>
    );
  }
}

export default App;
