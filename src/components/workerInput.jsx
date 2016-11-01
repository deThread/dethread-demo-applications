import React, { Component } from 'react';

const WorkerInput = function(props) {
  return (
    <div>
      <input className="inputMaterial numInput" type="number" id="workers" placeholder="Number of Workers" name="workers" min="1" max={`${props.optimalWorkers}`} onChange={props.updateSettings} />
      <span className="highlight"></span>
      <span className="bar"></span>
      
    </div>
  )
};

export default WorkerInput;
