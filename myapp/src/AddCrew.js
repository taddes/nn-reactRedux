import React, { Component } from 'react'

class AddCrew extends Component {
  state = {
    name: null,
    rank: null,
    race: null
  }
  render() {
      return (
        <div>
          <form>  
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={}></input>
            <label htmlFor="rank">Rank:</label>
            <input type="text" id="rank" onChange={}></input>
            <label htmlFor="race">Race:</label>
            <input type="text" id="race" onChange={}></input>
            <button>Submit</button>
          </form>
        </div>
    )
  }
}

export default AddCrew