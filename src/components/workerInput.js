import React, { Component } from 'react';

const WorkerInput = function(props) {
  return (
    <div>
      <input type="number" id="workers" name="workers" min="0" max={`${props.optimalWorkers}`} onChange={props.update} />
    </div>
  )
};

export default WorkerInput;
