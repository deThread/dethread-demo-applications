import React, { Component } from 'react';
import NavLink from './NavLink';
import Success from './Success';
import WorkerInput from './WorkerInput';
import HashInput from './HashInput';
import LengthInput from './LengthInput';
import CharsetDropDown from './CharsetDropDown';
import Spinner from './Spinner';
import { startWorkers } from './PerfInputs';

class Performance extends Component {
  render() {
    let solved;
    if (this.props.clearText) {
      solved = <Success clearText={this.props.clearText} duration={this.props.duration}/>
    } else if (this.props.calculating) {
      solved = <Spinner />
    }
    
    return(<div>
              <div className="perfContainer">
                <div className="card well well-lg">
                  <h2> MD5 Hash Decrypt Participation </h2>

                  <form>
                    <div className="form-group">
                      <p className="worker-recommendation">Optimal number of workers for your device: {this.props.optimalWorkers}</p>
                      <p className="worker-recommendation">(Choose 1 worker if you are running other processes.)</p>
                      <label for="workerInput">Workers</label>
                      <WorkerInput className="form-control" optimalWorkers={this.props.optimalWorkers} update={this.props.update.bind(null, 'workers')} />
                    </div>                    

                    <div className="form-group">
                      <label for="lengthInput">Length of Word</label>
                      <LengthInput className="form-control" update={this.props.update.bind(null, 'length')} />
                    </div>

                    <div className="form-group">
                      <label for="hashInput">Hash</label><br/>
                      <a target="_blank" href="http://www.miraclesalad.com/webtools/md5.php">[Hash Generator]</a>
                      <HashInput className="form-control" update={this.props.update.bind(null, 'hash')} />
                    </div>

                    <div className="form-group">
                      <label for="charsetDropDown">Charset</label><br/>
                      <CharsetDropDown className="form-control" />
                    </div>

                  </form>

                  <button className="startHash btn btn-danger" 
                    onClick={this.props.startMD5Decrypt}>
                    Start
                  </button>

                  <div>
                    There are {this.props.numClients} total clients contributing to this process.
                    {solved}
                  </div>
              </div>
              
            </div>
          </div>
       )
  }
}

export default Performance;
