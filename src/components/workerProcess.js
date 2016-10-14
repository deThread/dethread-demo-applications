import React, { Component } from 'react';
import { startWorkers } from './PerfInputs';

import Success from './Success';
import Spinner from './Spinner';

class WorkerProcess extends Component {
  render() {
    console.log('worker process props', this.props)
    const solved = this.props.clearText ? <Success clearText={this.props.clearText} duration={this.props.duration} /> : '';
    const spinner = !this.props.clearText ? <Spinner /> : '';
    const processing = !this.props.clearText ? <h2>Processing . . .</h2> : '';
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
