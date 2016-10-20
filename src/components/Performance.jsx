import React, { Component } from 'react';
import NavLink from './NavLink';
import Success from './Success';
import WorkerInput from './WorkerInput';
import HashInput from './HashInput';
import LengthInput from './LengthInput';
import CharsetDropDown from './CharsetDropDown';
import Spinner from './Spinner';

class Performance extends Component {

  render() {
    let solved;
    const hideUponSuccess = {};
    if (this.props.clearText) {
      solved = <Success clearText={this.props.clearText} duration={this.props.duration} globalConnections={this.props.globalConnections}/>
      hideUponSuccess.display = 'none';
      console.log(hideUponSuccess);
    } else if (this.props.calculating) {
      solved = <div><Spinner /><p>Number of contributing web workers: {this.props.globalWorkers}</p><p>Number of permutations: {this.props.globalNumCombos}</p></div>
    }

    const is = this.props.globalConnections === 1 ? 'is' : 'are';
    const client = this.props.globalConnections === 1 ? 'client' : 'total clients';
    const noTasksAvailable = (this.props.noTasksAvailable && !this.props.clearText) ? <p>Local tasks are complete, and there are no available tasks from the sever. The current process should end shortly.</p> : '';

    return(<div>
              <div className="perfContainer">
                <div className="card well well-lg">
                  <h2> MD5 Hash Decryption </h2><br />

                  <form style={hideUponSuccess} >
                    <h3>Host Settings</h3>
                    <div className="form-group">
                      <label htmlFor="lengthInput">Length of Word</label>
                      <LengthInput className="form-control" updateSettings={this.props.updateSettings.bind(null, 'length')} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="hashInput">Hash</label><br/>
                      <a target="_blank" href="http://www.miraclesalad.com/webtools/md5.php">[Hash Generator]</a>
                      <HashInput className="form-control" updateSettings={this.props.updateSettings.bind(null, 'hash')} />
                    </div>

                {/* <div className="form-group">
                    <label htmlFor="charsetDropDown">Charset</label><br/>
                    <CharsetDropDown className="form-control" selectChar={this.props.selectChar}/>
                  </div>
                  */}

                    <h3 className="local-settings">Local Settings</h3>
                    <div className="form-group">
                      <label htmlFor="workerInput">Workers</label>
                      <WorkerInput className="form-control" optimalWorkers={this.props.optimalWorkers} updateSettings={this.props.updateSettings.bind(null, 'workers')} />
                      <p className="worker-recommendation">Optimal number of workers for your device: {this.props.optimalWorkers} </p>
                      <p className="worker-recommendation">(Choose 1 worker if you are running other processes)</p>
                    </div>                    
                  </form>


                  <button style={hideUponSuccess} className="startHash btn btn-danger" 
                    onClick={this.props.startMD5Decrypt}>
                    Start
                  </button><br /><br />
                  {solved}
                  <div>
                    There {is} currently {this.props.globalConnections} {client} in the room.
                  </div>
                  {noTasksAvailable}
                </div>
            </div>
          </div>
       )
  }
}

export default Performance;
