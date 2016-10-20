import React, { Component } from 'react';
import { initSocket } from '../Socket';

let socket;
class TextParse extends Component{
	constructor(){
    super();
    this.state = {}
  }
  componentDidMount(){
    socket = initSocket(io);
    socket.on('connect', () => { 
      console.log('connected');
      socket.emit('joinTextParse');
    })
  }
  render(){
    return (
        <div className="card well well-lg">
          <article>
            This is an example of map reduce paradigm for parsing large text file. 
          </article>
        </div>
    )
  }
};

export default TextParse;