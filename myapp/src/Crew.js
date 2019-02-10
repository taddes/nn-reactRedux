import React from 'react';

const Crew = (props) => {
// const Crew = ({crew}) => {
  const {crew} = props;
  const crewList = crew.map(crewMember => {
    return(
    <div className="crew" key={crewMember.id}>
      <div>Name: {crewMember.name }</div>
      <div>Rank: {crewMember.rank}</div>
      <div>Race: {crewMember.race}</div>
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