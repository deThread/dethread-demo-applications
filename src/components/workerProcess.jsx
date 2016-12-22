import React from 'react';
import StateHeader from './StateHeader';
import Spinner from './Spinner'

const WorkerProcess = (props) => {
  const client = props.globalConnections === 1 ? 'client' : 'clients';
  const worker = props.workers === 1 ? 'worker' : 'workers';

  return (
    <div>
      <Spinner />
      <div className="state-box">
        <StateHeader title={'Decrypting hash:'} hash={props.hash} isMaster={props.isMaster}/>
        <div className="dataContainer">
          <div className="dataType">
            <p>Target word length</p><hr /><br />
            <p>Number of potential alphabet combinations</p><hr /><br />
            <p>Number of participating clients</p><hr /><br />
            <p>Number of contributing workers (all clients)</p><hr /><br />
            <p>Your workers</p><hr /><br />
          </div>
          <div className="dataValue">
            <p>{props.length}</p><hr /><br />
            <p>{props.globalNumCombos}</p><hr /><br />
            <p>{props.globalConnections}</p><hr /><br />
            <p>{props.globalWorkers}</p><hr /><br />
            <p>{props.workers}</p><hr /><br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProcess;
