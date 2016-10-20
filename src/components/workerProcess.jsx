import React, { Component } from 'react';
import { startWorkers } from '../workerController';

import Success from './Success';
import Spinner from './Spinner';

class WorkerProcess extends Component {
  render() {
    const solved = this.props.clearText ? <Success clearText={this.props.clearText} duration={this.props.duration} globalConnections={this.props.globalConnections} /> : '';
    const spinner = !this.props.clearText ? <Spinner /> : '';
    const processing = !this.props.clearText 
      ? <div><h2>Processing . . .</h2><p>There are {this.props.globalConnections} clients participating, using {this.props.globalWorkers} web workers.</p><p>Hash: {this.props.hash}</p><p>Number of permutations: {this.props.globalNumCombos}</p></div> 
      : '';
    const noTasksAvailable = (this.props.noTasksAvailable && !this.props.clearText)
      ? <span><br /><p>Local tasks are complete, and there are no available tasks from the sever. The current process should end shortly.</p></span>
      : '';

    return(<div> 
              <div className="card well well-lg">
                {processing}
                {spinner}
                {noTasksAvailable}
                {solved}
              </div>
          </div>
        )
  }
}

export default WorkerProcess;
