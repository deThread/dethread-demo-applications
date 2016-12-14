import React, { Component } from 'react';
import NavLink from './NavLink';
import Success from './Success';
import WorkerInput from './WorkerInput';
import HashInput from './HashInput';
import HashExplained from './HashExplained';
import LengthInput from './LengthInput';
import Spinner from './Spinner';

class Performance extends Component {
  togglePopup(e) {
    e.preventDefault();
    let isVisible = $('.popup').is(':visible');
    if (!isVisible) {
      $('.popup').show("slow");
      $('.popup').css('display', 'inline-block');
    } else {
      $('.popup').hide('200');
    }
    console.log(isVisible);
  }
  render() {
    let solved;
    let hideUponSuccess = {};
    if (this.props.clearText) {
      solved = <Success length={this.props.length} clearText={this.props.clearText} duration={this.props.duration} globalConnections={this.props.globalConnections} workers={this.props.globalWorkers} hash={this.props.hash} />
    } else if (this.props.calculating) {
      solved = <div><Spinner /><br /><p>Number of contributing web workers: {this.props.globalWorkers}</p><p>Number of permutations: {this.props.globalNumCombos}</p></div>
    }
    if (this.props.clearText || this.props.calculating) hideUponSuccess.display = 'none';

    const is = this.props.globalConnections === 1 ? 'is' : 'are';
    const client = this.props.globalConnections === 1 ? 'client' : 'total clients';
    const noTasksAvailable = (this.props.noTasksAvailable && !this.props.clearText) ? <p>Local tasks are complete, and there are no available tasks from the sever. The current process should end shortly.</p> : '';

    return (
      <div>
        <div style={hideUponSuccess} className="box">
          <h2> MD5 Hash Decryption </h2>
          <br />
          <br />
          <div className="group">
            <LengthInput className="form-control" updateSettings={this.props.updateSettings.bind(null, 'length')} />
          </div>
          <div className="group">
            <HashInput togglePopup={this.togglePopup.bind(this)} className="form-control inputHash" updateSettings={this.props.updateSettings.bind(null, 'hash')} />
            <HashExplained />
          </div>
          <div className="group">
            <WorkerInput className="form-control" optimalWorkers={this.props.optimalWorkers} updateSettings={this.props.updateSettings.bind(null, 'workers')} />
          </div>
          <div className="selectGroup">
            <p className="worker-recommendation">Optimal number of workers for your device: <b>{this.props.optimalWorkers}</b> </p>
            <p className="worker-recommendation">(Choose 1 worker if you are running other processes)</p>
            <p className="worker-recommendation">There {is} currently {this.props.globalConnections} {client} in the room.</p>
            <button style={hideUponSuccess} onClick={this.props.startMD5Decrypt}>Start</button>
          </div>
        </div>
        {solved}
        <div>
        </div>
        {noTasksAvailable}
      </div>
    )
  }
}

export default Performance;
