import React, { Component } from 'react';
import { initSocket } from '../Socket';

let socket,
    wordFrequency = {};
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
    socket.on('sendBookString', (data) => {
      console.log(`This is inside text parse, book data is : ${data}`)
    })
  }
  parseTextData(bookString){
    if (!bookString.length) return;
    var splitBook = bookString.split(/\b\W+\b/);
    for (var word of splitBook){
       wordFrequency[word] ? wordFrequency[word] += 1 : wordFrequency[word] = 1;
     }
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