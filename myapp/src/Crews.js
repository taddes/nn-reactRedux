import React from 'react';
import './Crews.css'


const Crews = ({crews, deleteCrew}) => {
  const crewList = crews.map(crew =>  {
    return(
      <div className="crew" key={ crew.id }>
      <div>Name: { crew.name }</div>
      <div>Race: { crew.race }</div>
      <div>Rank: { crew.rank }</div>
      <button onClick={()=>{deleteCrew(crew.id)}}>Delete Crew Member</button>
    </div>
    ) 
});

  return(
    <div className="crew-list">
      { crewList }
    </div>
  )
}

export default Crews