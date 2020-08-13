import React from 'react';

const ComponentNotFound = prop => 
{
  console.log(prop);
  
  return (
  <div>
    Component {prop.data.__typename} is not defined. Add it to components.js
  </div>
)
}

export default ComponentNotFound