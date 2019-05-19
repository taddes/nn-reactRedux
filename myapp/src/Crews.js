import React from 'react';


const Crews = (props) => {
  const { crews } = props;
  const crewList = crews.map(crew =>  {
    return(
      <div className="crew" key={ crew.id }>
      <div>Name: { crew.name }</div>
      <div>Race: { crew.race }</div>
      <div>Rank: { crew.rank }</div>
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