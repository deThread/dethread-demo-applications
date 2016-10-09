import React, { Component } from 'react';
import { startWorkers } from './perfInputs';

class WorkerProcess extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let numWorkers = 3 || navigator.hardwareConcurrency || 4;
    const data = JSON.parse(this.props.data);
    console.log('worker process data', data);
    startWorkers(this.props.p2p, +data.begin, +data.end, +numWorkers, data.hash, data.startTime, +data.length);
  }

  render() {
    return(
          <div> Processing </div>
          )
  }
}

export default WorkerProcess;