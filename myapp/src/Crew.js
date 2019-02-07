import React, { Component } from 'react';

class Crew extends Component {
  render() {
    console.log(this.props)
    const {name, rank, race} = this.props
    return (
      <div className="crew">
        <div>Name: {name}</div>
        <div>Rank: {rank}</div>
        <div>Race: {race}</div>
      </div>
    )
  }
}

export default Crew