import React, { Component } from 'react';
import Crews from './Crews'
import AddCrew from './AddCrew';

class App extends Component {
  state = {
    crews: [
      { name: 'James T. Kirk', rank: 'Captain', race: 'Human', id: 1 },
      { name: 'Leonard H. McCoy', rank: 'Chief Medical Officer', race: 'Human', id: 2 },
      { name: 'Spock', rank: 'Commander', race: 'Vulcan', id: 3 }
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
  deleteCrew = (id) => {
    let crews = this.state.crews.filter(crew => {
      return crew.id !== id;
    });
    this.setState({
      crews: crews
    });
  }
  componentDidMount() {
    console.log('component mounted')
  }
  render() {
    return(
      <div  className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
        <Crews deleteCrew={this.deleteCrew} crews={this.state.crews}/>
        <AddCrew addCrew={this.addCrew}/>

      </div>
    );
  }
}

export default App;
