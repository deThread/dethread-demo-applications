import React from 'react';

const Docs = () => {
  return (
    <div className="container docContainer">
      <h2>Installation</h2>
      <p className="pDoc">In the terminal, install deThread via npm:</p> 
      <div className="well">
        <p className='pDoc'>npm install --S dethread </p>
      </div>
      <hr width="100%"></hr>
      <h2>API Documentation</h2>
      <h3 className="pDoc">Methods</h3>
      <div className="well">
        <p className="pDoc">dethread.start(io, tasks, clientInit)</p>
        <p className="comments">&nbsp;&nbsp;// Initializes dethread distributed computing process.</p>
        <p className="pDoc">dethread.on(event name, callback)</p>
        <p className="comments">&nbsp;&nbsp;// Adds custom socket event handlers.</p>
        <p className="pDoc">dethread.closeProcess()</p>
        <p className="comments">&nbsp;&nbsp;// Terminate socket connections and reset server state.</p>
      </div>
      <h3>Properties</h3>
      <br/>
      <div className="well">
        <p className="pDoc">dethread.state</p>
        <p className="comments">&nbsp;&nbsp;// Object to contain application state.</p>
        <p className="pDoc">dethread.connections</p>
        <p className="comments">&nbsp;&nbsp;// Array of current connected socket-clients</p>
        <p className="pDoc">dethread.socketPool</p>
        <p className="comments">&nbsp;&nbsp;// Array of current, non-working socket-clients, referenced by ID.</p>
        <p className="pDoc">dethread.taskQueue</p>
        <p className="comments">&nbsp;&nbsp;// Array of total set of all tasks.</p>
        <p className="pDoc">dethread.taskCompletionIndex</p>
        <p className="comments">&nbsp;&nbsp;// Index that tracks sent tasks.</p>
        <p className="pDoc">dethread.failedTasks</p>
        <p className="comments">&nbsp;&nbsp;// Array of current references to failed tasks, referenced by taskQueue index.</p>
      </div>
      <br/>
      <hr/>
      <h2>Getting Started</h2>
      <p className="pDoc">
        The deThread library is built on top of the socket.io library. 
        In your server, simply require the socket.io and dethread modules.
      </p>
      <p className="pDoc">Getting started is easy, first call dethread.start. </p>
      <div className="well">
       <p className="pDoc">const http = require('http')</p>
       <p className="pDoc">const io = require('socket.io')(http)</p>
       <p className="pDoc">const tasks = [...]</p>
       <p className="comments">&nbsp;&nbsp;// An array of the total set of all task chunks.</p>
       <p className="pDoc">const clientInit = {'{...}'}</p>
       <p className="comments">&nbsp;&nbsp;// An options object to provide data to the clients on initial socket connection.</p>
       <p className="pDoc"> dethread.start(io, tasks, clientInit)</p>
      </div>
      <p className="pDoc">
        To create a custom socket event handler, use dethread.on.
        To emit a response back to a client, you must use the socketID to retrieve the corresponding socket client.  
        To do this, simply reference the socket object using dethread.connections[socketID].  
        This will return a socket object to which you can emit.
      </p>
      <br/>
      <div className="well">
        <p className="pDoc">dethread.on('inEvent', function(socketID, ...Params) {"{"}</p>
        <p className="pDoc">&nbsp;&nbsp;dethread.connections[socketID].emit('outEvent', data)</p>
        <p className="pDoc">{"})"} </p>
      </div>
      <br/>
      <p className="pDoc">
        Task distribution with dethread is easy. After calling dethread.start, task distribution and failure handling are both
        managed internally.  There is no need for a developer to reference dethread.connections, dethread.socketPool, dethread.taskQueue, 
        dethread.taskCompletionIndex, or dethread.failedTasks for simple applications. 
        However, these properties are exposed and accessible to the developer for advanced processes.
      </p>
      <br/>
      <hr/>
      <h2>Task Handling on the Client</h2>
      <p className="pDoc">
        Communication between client and servers is handled with the socket.io interface. To handle and emit socket events,
        use the <a target="_blank" href="http://socket.io/docs/">socket.io client API</a>.
        Before the client can receive task from the server, the client must emit a clientReady message.
      </p>
      <div className="well">
        <p className="pDoc">  
          socket.emit('clientReady')
        </p>
      </div>
      <p className="pDoc">
       To terminate and resolve a distributed computing process, specifify the following socket emit event: 
      </p>
      <div className="well">
        <p className="pDoc">socket.emit('processComplete', data)</p>
      </div>
      <h3>Task Distribution with Web Workers</h3>
      <br/>
      <p className="pDoc">
        Web Workers are used to simulate a multithread environment to enable concurrent processing. 
        The client may receive multiple tasks from the server to process. To specify the number of workers 
        to use on a client pass in a number as a second parameter to clientReady message. 
        Use navigator.hardwareConcurrency to determine the maximum number of Web Workers a client can 
        handle(number of cores).
      </p>
      <br/>
      <div className="well">
        <p className="pDoc">socket.emit('clientReady', numWorkers)</p>
      </div>
        <p className="pDoc">If numWorkers is not supplied, it defaults to 1.</p>
      <br/>
    </div>
    );
};

export default Docs;
