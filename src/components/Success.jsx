import React, { Component } from 'react';

const Success = function(props) {
  const dur = props.duration === 1 ? 'second' : 'seconds';
  const client = props.globalConnections === 1 ? 'client' : 'clients';

  return (<div>
            <div className="success">
              <h3> Password Found! </h3>
              <h2> {props.clearText} </h2>
              <p className="successText"> This problem was solved by {props.globalConnections} {client} in {props.duration} {dur}! </p>
            </div>
          </div>)
};

export default Success;
