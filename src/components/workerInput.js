import React, { Component } from 'react';

const WorkerInput = function(props) {
  return (
    <div>
      <input type="number" id="workers" name="workers" min="1" max={`${props.optimalWorkers}`} onChange={props.updateSettings} />
    </div>
  )
};

export default WorkerInput;
