import React, { Component } from 'react';

class Crew extends Component {
  render() {
    console.log(this.props)
    const {crew} = this.props;
    const crewList = crew.map(crewMember => {
      return(
        <div className="crew" key={crewMember.id}>
        <div>Name: {crewMember.name }</div>
        <div>Rank: {crewMember.rank}</div>
        <div>Race: {crewMember.race}</div>
      </div>
      )
    })
    return (
      <div className="crew-list">
      { crewList }
      </div>
    )
  }
}

export default Crew