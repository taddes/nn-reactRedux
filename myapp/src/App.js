import React, { Component } from 'react';
import Crew from './Crew';
import AddCrew from './AddCrew';

class App extends Component {
  state = {
    crews: [
      {name: 'James T. Kirk', rank: 'Captain', race: 'Human', id: 1},
      {name: 'Spock', rank: 'Commander', race: 'Vulcan', id: 2},
      {name: 'Leonard H. McCoy', rank: 'Doctor', race: 'Human', id: 3}
    ]
  }
  addCrew = (crew) => {
    console.log(crew)
    crew.id = Math.random();
    let crews = [...this.state.crews, crew]
    this.setState({
      crews: crews
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Heyo!</h1>  
        <Crew crews={this.state.crews}/>
        <AddCrew addCrew={this.addCrew}/>
      </div>
    );
  }
}

export default App;
