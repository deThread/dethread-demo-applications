import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import WorkerInput from './WorkerInput';

const PendingWorkers = function(props) {
  return (  <div>
              <p>A host has already been selected, and the session is about to begin.</p>
              <h3>How many workers would you like to contribute?</h3>
              <p className="worker-recommendation">Optimal number of workers for your device: {props.optimalWorkers} </p>
              <p className="worker-recommendation">(Choose 1 worker if you are running other processes)</p><br />
              <WorkerInput className="form-control" optimalWorkers={props.optimalWorkers} updateSettings={props.updateSettings.bind(null, 'workers')} /><br />
              <button className="partBTN btn btn-primary" onClick={props.chooseWorkerCount} >Submit</button>
            </div>
          )
};

export default PendingWorkers;
