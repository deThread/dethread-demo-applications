import React, { Component } from 'react';

const HowDoesItWork = function () {
  return (
    <div className="container">
      <div className="text-center">
        <h2> How does it work?</h2>
        <br />
        <div>
          <article>
            <p>deThread can be installed directly from npm and required into server-side JavaScript.
              The library exposes several objects and methods to allow the developer to configure an
              application to run a distributed process and add additional event handlers to include 
              logic for complex processes. Developers write the client-side code to run a process 
              with inputs provided by the server, as well as define the task chunks controlled on the server. 
              Once a process starts, deThread handles the distribution of tasks and the management of “joining”
              and “leaving” clients in the background automatically, using web sockets to provide bi-directional,
              real-time communication. Additionally, each client can run multiple tasks in parallel with web workers,
              which run non-blocking JavaScript threads outside the main browser context.
          </p>
          </article>
          <br/>
          <div className="diagram-container">
            <img className="center-block img-responsive figure-format" src="/Diagram1a.jpg"/>
            <h4 > 
              <strong>
                <span className="header-highlight">Figure 1:&nbsp;</span> 
                Task distribution from the server to multiple clients
              </strong>
            </h4>
            <br /> 
            <img className="center-block img-responsive figure-format" src="/Diagram2a.jpg"/>
            <h4> 
              <strong>
                <span className="header-highlight">Figure 2:&nbsp;</span> 
                Task distribution to a single client utilizing multiple web workers
              </strong>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HowDoesItWork;