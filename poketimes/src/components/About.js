import React from 'react';
import Rainbow from './hoc/Rainbow';

const About = () => {
  return(
    <div className="container">
      <h4 className="center">Aboutpage</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur, odit reiciendis, quas et ducimus quidem consequatur omnis quos eveniet dolores alias a, expedita recusandae explicabo? Possimus provident sequi temporibus.</p>
    </div>
  )
}

export default Rainbow(About);