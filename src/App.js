import React, { Component } from 'react';
import SearchOrAdd from './components/SearchOrAdd';
import Children from './components/Children';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchOrAdd/>
        <Children/>
      </div>
    );
  }
}

export default App;
