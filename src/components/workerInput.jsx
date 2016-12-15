import React, { Component } from 'react';

class WorkerInput extends Component {
  render() {
    return (
      <div>
        <input className="inputMaterial numInput" type="number" id="workers" placeholder="Number of Workers" name="workers" min="1" max={`${this.props.optimalWorkers}`} onChange={this.props.updateSettings} />
        <i className="material-icons help-button" onClick={this.props.togglePopup.bind(null, '#worker-info')}>help</i>
        <span className="highlight"></span>
        {/* <span className="bar"></span>*/}
      </div>
    );
  }
}

export default WorkerInput;
