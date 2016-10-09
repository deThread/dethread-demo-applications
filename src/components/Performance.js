import React, { Component } from 'react';
import NavLink from './NavLink';

//input components 
import WorkerInput from './workerInput';
import HashInput from './hashInput';
import LengthInput from './lengthInput';
import {startWorkers, handleMessage} from './perfInputs';

class Performance extends Component{
  constructor(props){
    super(props);
    this.state = {length: 0, workers : 4, hash : null, }
    this.update = this.update.bind(this);
    this.startMD5Decrypt = this.startMD5Decrypt.bind(this);
    
  }
  update(name, e) {
      console.log(this.state)
      let toChange = name;
      let stateVal = this.state[toChange];
      let stateUpdate = {};
      stateUpdate[toChange] = e.target.value;
      this.setState(stateUpdate);   
  }
  update(name, e) {
      console.log(this.state)
      let toChange = name;
      let stateVal = this.state[toChange];
      let stateUpdate = {};
      stateUpdate[toChange] = e.target.value;
      this.setState(stateUpdate);      
  }
  startMD5Decrypt(){
    //emit to slave clients
    this.props.p2p.emit('starting to crack');
    console.log('pee2pww',this.props.p2p.decoder)
    //startWorkers.bind(this, +this.state.length, +this.state.workers, this.state.hash)

  }
  componentDidMount(){
    console.log('inside CDM, p2p is: ',this.props.p2p);
  }
  render(){
    return(<div>
              <div className="perfContainer">
                <div className="card well well-lg">
                  <h2> MD5 Hash Decrypt Participation </h2>

                  <form>
                    <div className="form-group">
                      <label for="workerInput">Workers</label>
                      <WorkerInput type="text" className="form-control" id="workerInput"
                      workers={this.state.workers} update={this.update.bind(this,'workers')} />
                    </div>                    

                    <div className="form-group">
                      <label for="lengthInput">Length of Word</label>
                      <LengthInput type="text" className="form-control" id="lengthInput"
                      len={this.state.length} update={this.update.bind(this,'length')} />
                    </div>

                    <div className="form-group">
                      <label for="hashInput">Hash</label>
                      <HashInput id="hashInput" className="form-control"
                      hash={this.state.hash} update={this.update.bind(this,'hash')} />
                    </div>
                  </form>

                  <button className="startHash btn btn-danger" 
                    onClick={this.startMD5Decrypt.bind(this)}>
                    Fire cracker.js.io
                  </button>
              </div>
            </div>
          </div>
       )
  }
}

export default Performance;