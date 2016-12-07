import React from 'react';

const Docs = () => {
  return (
    <div>
      <h2>Installation</h2>
      <p>In the terminal, install deThread via npm:</p> 
      <div className="well"> npm install --S dethread </div>
      <br/>
      <h2>API Documentation</h2>
      <h3>Methods</h3>
      <div className="well well-lg">
        dethread.start(io, tasks, clientInit) 
          // Initializes dethread distributed computing process.
        dethread.on(event name, callback)
          // Adds custom socket event handlers.
        dethread.closeProcess()
          // Terminate socket connections and reset server state.
      </div>
      <h2>Properties</h2>
      <div className="well">
        dethread.state
          // Object to contain application state.
        dethread.connections
          // Array of current connected socket-clients
        dethread.socketPool
          // Array of current, non-working socket-clients, referenced by ID.
        dethread.taskQueue
          // Array of total set of all tasks.
        dethread.taskCompletionIndex
          // Index that tracks sent tasks.
        dethread.failedTasks
          // Array of current references to failed tasks, referenced by taskQueue index.
      </div>
      <h2>Getting Started</h2>
      <p>
        The deThread library is built on top of the socket.io library. 
        In your server, simply require the socket.io and dethread modules.
      </p>
      <br/>
      <div className="well">
        Getting started is easy, first call dethread.start. 

        const http = require('http')
        const io = require('socket.io')(http)

        const tasks = [...]
          // An array of the total set of all task chunks.
        const clientInit = {"..."}
          // An options object to provide data to the clients on initial socket connection.

        dethread.start(io, tasks, clientInit)
      </div>
      <p>
        To create a custom socket event handler, use dethread.on.
        To emit a response back to a client, you must use the socketID to retrieve the corresponding socket client.  
        To do this, simply reference the socket object using dethread.connections[socketID].  
        This will return a socket object to which you can emit.
      </p>
      <br/>
      <div className="well">
        dethread.on('inEvent', function(socketID, ...Params){
          "dethread.connections[socketID].emit('outEvent', data)"
        })
      </div>
      <p>
      <br/>
        Task distribution with dethread is easy. After calling dethread.start, task distribution and failure handling are both
        managed internally.  There is no need for a developer to reference dethread.connections, dethread.socketPool, dethread.taskQueue, 
        dethread.taskCompletionIndex, or dethread.failedTasks for simple applications. 
        However, these properties are exposed and accessible to the developer for advanced processes.
      </p>
      <br/>
      <h2>Task Handling on the Client</h2>
      <p>
        Communication between client and servers is handled with the socket.io interface. To handle and emit socket events,
        use the [socket.io client API](http://socket.io/docs/).
        Before the client can receive task from the server, the client must emit a clientReady message.
      </p>
      <p className="well">  
        socket.emit('clientReady')
      </p>
      <p>
       To terminate and resolve a distributed computing process, specifify the following socket emit event: 
      </p>
      <p className="well">
        socket.emit('processComplete', data)
      </p>
      <hr/>
      <h2>Task Distribution with Web Worker</h2>
      <p>
        Web Workers are used to simulate a multithread environment to enable concurrent processing. 
        The client may receive multiple tasks from the server to process. To specify the number of workers 
        to use on a client pass in a number as a second parameter to clientReady message. 
        Use navigator.hardwareConcurrency to determine the maximum number of Web Workers a client can 
        handle(number of cores).
      </p>
      <p className="well">
        socket.emit('clientReady', numWorkers)
        If numWorkers is not supplied, it defaults to 1.
      </p>
    </div>
    );
};

export default Docs;
