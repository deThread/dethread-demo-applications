import React, { Component } from 'react';
import NavLink from './NavLink';

//input components 
import WorkerInput from './workerInput';
import HashInput from './hashInput';
import LengthInput from './lengthInput';
import {startWorkers, handleMessage} from './perfInputs.js';

console.log(startWorkers);
class Performance extends Component{
  constructor(props){
    super(props);
    this.state = {hasUserConnected : false, length: 0, workers : 4, hash : null, }
    this.verifyConnectionSuccess = this.verifyConnectionSuccess.bind(this);
    this.crackMD5 = this.crackMD5.bind(this);
    this.update = this.update.bind(this);
  }

  verifyConnectionSuccess(e){
    // wait for server response, if success:
    e.preventDefault();
    console.log('verifying user');
    this.setState({hasUserConnected: true})
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

                    <button className="startHash btn btn-danger" 
                      onClick={startWorkers.bind(this, +this.state.length, +this.state.workers, this.state.hash)}>
                      Fire cracker.js.io
                    </button>

                    <br></br>
                    <p> Would you like to participate in a group MD5 decryption effort?</p>
                    <button className="goToRTC btn btn-primary" onClick={this.verifyConnectionSuccess}>Sure!</button>

                  </form>   
                  <div className="container-fluid">
                    <div className="row text-center"> 
                      <h1><em>Currently Hosting</em></h1>
                    </div>
                  </div>

                </div>
              </div>
          </div>
          )
  }
}

export default Performance;