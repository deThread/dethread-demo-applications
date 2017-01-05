import React from 'react';
import StateHeader from './StateHeader';

const Success = (props) => {
  const dur = props.duration === 1 ? 'second' : 'seconds';
  const client = props.globalConnections === 1 ? 'client' : 'clients';
  const worker = props.workers === 1 ? 'worker' : 'workers';

  return (
    <div>
      <div className="state-box">
        <StateHeader title={'Password Found'} hash={props.hash} clearText={props.clearText} isMaster={props.isMaster}/>
        <div className="dataContainer">
          <div className="dataType">
            <p>Duration</p><hr /><br />
            <p>Number of potential alphabet combinations</p><hr /><br />
            <p>Amount of participating clients</p><hr /><br />
            <p>Number of contributing workers (all clients)</p><hr /><br />
            <p>Your workers</p><hr /><br />
          </div>
          <div className="dataValue">
            <p>{props.duration} {dur}</p><hr /><br />
            <p>{props.length}</p><hr /><br />
            <p>{props.globalConnections}</p><hr /><br />
            <p>{props.globalWorkers}</p><hr /><br />
            <p>{props.workers}</p><hr /><br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
