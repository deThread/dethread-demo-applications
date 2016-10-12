import React, { Component } from 'react';
import { startWorkers } from './perfInputs';

import Success from './Success';
import Spinner from './Spinner';

class WorkerProcess extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let numWorkers = (navigator.hardwareConcurrency / 2) || 4;
    const data = JSON.parse(this.props.data);
    console.log('worker process data', data);
    startWorkers(this.props.onSolution, this.props.p2p, +data.begin, +data.end, +numWorkers, data.hash, data.startTime, +data.length);
  }

  render() {
    const solved = this.props.success ? <Success pw={this.props.pw} duration={this.props.duration} /> : "";
    const spinner = !this.props.success ? <Spinner /> : "";
    const processing = !this.props.success ? <h2>Processing . . .</h2> : "";
    return(<div> 
              <div className="card well well-lg">
                {processing}
                {spinner}
                {solved}
              </div>
          </div>
        )
  }
}

export default WorkerProcess;
