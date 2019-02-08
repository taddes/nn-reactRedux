import React, { Component } from 'react';
import Crew from './Crew';

class App extends Component {
  state = {
    crew: [
      {name: 'James T. Kirk', rank: 'Captain', race: 'Human', id: 1},
      {name: 'Spock', rank: 'Commander', race: 'Vulcan', id: 2},
      {name: 'Leonard H. McCoy', rank: 'Doctor', race: 'Human', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Heyo!</h1>  
        <Crew crew={this.state.crew}/>
      </div>
    );
  }
}

export default App;
