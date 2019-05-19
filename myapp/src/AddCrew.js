import React, { Component } from 'react'

class AddCrew extends Component {
  state = {
    name: null,
    rank: null,
    race: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCrew(this.state)
  }
  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>  
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={this.handleChange}></input>
            <label htmlFor="name">Rank:</label>
            <input type="text" id="rank" onChange={this.handleChange}></input>
            <label htmlFor="name">Race:</label>
            <input type="text" id="race" onChange={this.handleChange}></input>
            <button>Submit</button>
          </form>
        </div>
    )
  }
}

export default AddCrew