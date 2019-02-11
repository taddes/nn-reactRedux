import React from 'react';

const Crew = (props) => {
// const Crew = ({crew}) => {
  const {crews} = props;
  const crewList = crews.map(crewMember => {
    if (crewMember.race === 'Human') {
    return(
    <div className="crew" key={crewMember.id}>
      <div>Name: {crewMember.name }</div>
      <div>Rank: {crewMember.rank}</div>
      <div>Race: {crewMember.race}</div>
      <br />
    </div>
    )
  } 
  })
    return (
      <div className="crew-list">
      { crewList }
      </div>
    )
  }

export default Crew