import React, { Component } from 'react';
import Crew from './Crew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Heyo!</h1>  
        <Crew name="Spock" rank="Commander" race="Vulcan"/>
        <br />
        <Crew name="Kirk" rank="Captain" race="Human"/>
      </div>
    );
  }
}

export default App;
