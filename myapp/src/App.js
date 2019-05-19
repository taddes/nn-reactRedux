import React, { Component } from 'react';
import Crews from './Crews'

class App extends Component {
  state = {
    crews: [
      { name: 'James T. Kirk', rank: 'Captain', race: 'Human', id: 1 },
      { name: 'Leonard H. McCoy', rank: 'Chief Medical Officer', race: 'Human', id: 2 },
      { name: 'Spock', rank: 'Commander', race: 'Vulcan', id: 3 }
    ]
  }
  render() {
    return(
      <div  className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <Crews crews={this.state.crews}/>

      </div>
    );
  }
}

export default App;
