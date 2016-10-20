import React, { Component } from 'react';
import { initSocket } from '../Socket';

let socket,
    wordFrequency = {};
class TextParse extends Component{
	constructor(){
    super();
    this.state = {}
    this.parseTextData = this.parseTextData.bind(this);
  }
  componentDidMount(){
    socket = initSocket(io);
    socket.on('connect', () => { 
      console.log('connected');
      socket.emit('joinTextParse');
    })
    socket.on('sendBookString', (data) => {
      this.parseTextData(data);
    })
  }
  parseTextData(bookString){
    if (!bookString.length) return;
    var splitBook = bookString.split(/\b\W+\b/);
    for (var word of splitBook){
       wordFrequency[word] ? wordFrequency[word] += 1 : wordFrequency[word] = 1;
     }
     console.dir(`This is inside text parse, book data frequency is : ${JSON.stringify(wordFrequency)}`)
     socket.emit('textParseComplete', wordFrequency);
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