import React, { Component } from 'react';
import NavLink from './NavLink';

//input components 
import WorkerInput from './workerInput';
import HashInput from './hashInput';
import LengthInput from './lengthInput';
import {startWorkers, handleMessage} from './perfInputs.js';


class Performance extends Component{
  constructor(props){
    super(props);
    this.state = {length: 0, workers : 4, hash : null, }
    this.crackMD5 = this.crackMD5.bind(this);
    this.update = this.update.bind(this);
  }
  update(name, e) {
      console.log(this.state)
      let toChange = name;
      let stateVal = this.state[toChange];
      let stateUpdate = {};
      stateUpdate[toChange] = e.target.value;
      this.setState(stateUpdate);   
  }
  crackMD5(length, workers, hash){
    //needs to call MD5
    console.log(startWorkers, handleMessage)
    console.log('in crack');
  }
  update(name, e) {
      console.log(this.state)
      let toChange = name;
      let stateVal = this.state[toChange];
      let stateUpdate = {};
      stateUpdate[toChange] = e.target.value;
      this.setState(stateUpdate);      
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
                    onClick={startWorkers.bind(this, +this.state.length, +this.state.workers, this.state.hash)}>
                    Fire cracker.js.io
                  </button>
              </div>
            </div>
          </div>
       )
  }
}

export default Performance;