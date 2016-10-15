import React, { Component } from 'react';
import { startWorkers } from './PerfInputs';

import Success from './Success';
import Spinner from './Spinner';

class WorkerProcess extends Component {
  render() {
    const solved = this.props.clearText ? <Success clearText={this.props.clearText} duration={this.props.duration} /> : '';
    const spinner = !this.props.clearText ? <Spinner /> : '';
    const processing = !this.props.clearText ? <div><h2>Processing . . .</h2><p>There are {this.props.globalConnections} clients participating, using 11{/*this.props.globalWorkers*/} web workers.</p><p>Hash: {this.props.hash}</p><p>Number of permutations: {this.props.globalNumCombos}</p></div> : '';
    
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
