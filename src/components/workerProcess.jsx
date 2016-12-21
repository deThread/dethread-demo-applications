import React from 'react';
import StateHeader from './StateHeader';
import Spinner from './Spinner';

const WorkerProcess = (props) => {
  const noTasksAvailable = props.noTasksAvailable
    ? <span><br /><p>Local tasks are complete, and there are no available tasks from the sever. The current process should end shortly.</p></span>
    : '';

  const client = props.globalConnections === 1 ? 'client' : 'clients';
  const worker = props.workers === 1 ? 'worker' : 'workers';

  return (
    <div>
      <div className="state-box">
        <StateHeader title={'MD5 Hash Decryption'} hash={props.hash} />
        <div className="dataContainer">
          <div className="dataType">
            <p>Target word length</p><hr /><br />
            <p>Number of potential permutations</p><hr /><br />
            <p>Number of participating clients</p><hr /><br />
            <p>Number of contributing workers</p><hr /><br />
            <p>Your workers</p><hr /><br />

          </div>
          <div className="dataValue">
            <p>{props.length}</p><hr /><br />
            <p>{props.globalNumCombos}</p><hr /><br />
            <p>{props.globalConnections}</p><hr /><br />
            <p>{props.globalWorkers}</p><hr /><br />
            <p>{props.workers}</p><hr /><br />
            {noTasksAvailable}
          </div>
        </div>
      </div>
      <Spinner />
    </div>
  );
}


export default WorkerProcess;



