import React from 'react';
import Spinner from './Spinner';

const PendingStart = (props) => {
  const workers = props.workers > 1 ? 'workers' : 'worker';

  return (
    <div>
      <h1>Waiting for host to start . . .</h1>
      <p>There are currently {props.globalConnections}clients in the room.</p>
      <p>You will be contributing {props.workers} {workers}.</p>
      <Spinner />
    </div>
  );
};

export default PendingStart;
