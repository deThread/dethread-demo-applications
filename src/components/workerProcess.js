import React, { Component } from 'react';
import { startWorkers } from './perfInputs';

import Success from './Success';
class WorkerProcess extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let numWorkers = 3 || navigator.hardwareConcurrency || 4;
    const data = JSON.parse(this.props.data);
    console.log('worker process data', data);
    startWorkers(this.props.onSolution, this.props.p2p, +data.begin, +data.end, +numWorkers, data.hash, data.startTime, +data.length);
  }

  render() {
    const solved = this.props.success ? <Success pw={this.props.pw} duration={this.props.duration} /> : "";
    return(
          <div> 
            <h2>Processing ...</h2> 
            <div className="container spinner">
					    <div className="any-element animation is_loading">
  				 	    &nbsp;
  				    </div>
              <div>
                {solved}
              </div>
				    </div>
          </div>
          )
  }
}

export default WorkerProcess;