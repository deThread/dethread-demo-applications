import React, { Component } from 'react';

const Success = function(props) {
  const dur = props.duration === 1 ? 'second' : 'seconds';
  const client = props.globalConnections === 1 ? 'client' : 'clients';

  return (<div>
            <div className="successBox">
            <div className="successHeader">
              <h2> Password Found! <br/> {props.clearText} </h2>
            </div>
            <div className="dataContainer">
              <div className="dataType">
                <p>Duration</p>
                <hr/>
                <br/>
                <p>Word Length</p>
                <hr/>
                <br/>
                <p>Hash</p>
                <hr/>
                <br/>
                <p>Amount of Participating Users</p>
                <hr/>
                <br/>
                <p>Number of Web Workers</p>    
              </div>
              <div className="dataValue">
                <p>{props.duration} {dur}</p>
                <hr/>
                <br/>
                <p>{props.length}</p>
                <hr/>
                <br/>
                <p>{props.hash}</p>
                <hr/>
                <br/>
                <p>{props.globalConnections}</p>
                <hr/>
                <br/>
                <p>{props.workers}</p>
              </div>
            </div>
          </div>
          </div>
        )
};

export default Success;
