import React from 'react';

const Crew = ({crews, deleteCrew}) => {
// const Crew = ({crew}) => {
  const crewList = crews.map(crewMember => {
    return(
    <div className="crew" key={crewMember.id}>
      <div>Name: {crewMember.name }</div>
      <div>Rank: {crewMember.rank}</div>
      <div>Race: {crewMember.race}</div>
      <button onClick={() => {deleteCrew(crewMember.id)}}>Delete {crewMember.name}</button>
      <br />
    </div>
    )
  })
    return (
      <div className="crew-list">
      { crewList }
      </div>
    )
  }

export default Crew