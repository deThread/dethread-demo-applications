import React, { Component } from 'react';
import NavLink from './NavLink';
import Success from './Success';
import WorkerInput from './workerInput';
import HashInput from './hashInput';
import LengthInput from './lengthInput';
import CharsetDropDown from './CharsetDropDown';
import { startWorkers } from './perfInputs';

class Performance extends Component {
  constructor() {
    super();
    this.state = { length: 0, workers: 3, hash: null, numClients: 0 };
    this.update = this.update.bind(this);
    this.startMD5Decrypt = this.startMD5Decrypt.bind(this);
  }

  componentDidMount() {
    this.setState({ numClients : this.props.p2p.numConnectedClients + 1 })
  }

  update(name, e) {
    console.log(this.state);
    const toChange = name;
    const stateVal = this.state[toChange];
    const stateUpdate = {};
    stateUpdate[toChange] = e.target.value;
    this.setState(stateUpdate);   
  }

  startMD5Decrypt() {
    console.log('start decryption');

    const numCombos = Math.pow(26, this.state.length);
    const clientFrag = Math.round(numCombos / this.state.numClients);

    const hostBegin = 0;
    const hostEnd = clientFrag - 1;
    const clientBegin = clientFrag;
    const clientEnd = clientBegin + (clientFrag - 1);

    const startTime = Date.now();

    this.props.p2p.emit('starting to crack', { begin: clientBegin, end: clientEnd, hash: this.state.hash, startTime, length: +this.state.length });

    startWorkers(this.props.onSolution,this.props.p2p, hostBegin, hostEnd,
                 +this.state.workers, this.state.hash, 
                 startTime, +this.state.length);
  }

  render() {
    const solved = this.props.success ? <Success pw={this.props.pw} duration={this.props.duration}/> : "";
    return(<div>
              <div className="perfContainer">
                <div className="card well well-lg">
                  <h2> MD5 Hash Decrypt Participation </h2>

                  <form>
                    <div className="form-group">
                      <label for="workerInput">Workers</label>
                      <WorkerInput className="form-control" id="workerInput" type="text"
                      workers={this.state.workers} update={this.update.bind(this,'workers')} />
                    </div>                    

                    <div className="form-group">
                      <label for="lengthInput">Length of Word</label>
                      <LengthInput className="form-control" id="lengthInput" type="text"
                      len={this.state.length} update={this.update.bind(this,'length')} />
                    </div>

                    <div className="form-group">
                      <label for="hashInput">Hash</label><br/>
                      <a target="_blank" href="http://www.miraclesalad.com/webtools/md5.php">[Hash Generator]</a>
                      <HashInput className="form-control" id="hashInput"
                      hash={this.state.hash} update={this.update.bind(this,'hash')} />
                    </div>

                    <div className="form-group">
                      <label for="charsetDropDown">Charset</label><br/>
                      <CharsetDropDown className="form-control" id="charsetDropDown" />
                    </div>

                  </form>

                  <button className="startHash btn btn-danger" 
                    onClick={this.startMD5Decrypt.bind(this)}>
                    Start
                  </button>
                  <div>
                    There are {this.state.numClients} total clients in this room.
                    {solved}
                  </div>
              </div>
              
            </div>
          </div>
       )
  }
}

export default Performance;
