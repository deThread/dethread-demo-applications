import React, { Component } from 'react';
import { initSocket } from '../Socket';
import Spinner from './Spinner';
let start;
let socket,
    wordFrequency = {};
class TextParse extends Component{
	constructor(){
    super();
    this.state = {complete : false}
    this.parseTextData = this.parseTextData.bind(this);
  }
  componentDidMount(){
    socket = initSocket(io);
    socket.on('connect', () => { 
      console.log('connected', socket.id);
      socket.emit('joinTextParse');
    })
    socket.on('sendBookFragString', (data) => {
      this.parseTextData(data);
    })
    socket.on('processComplete', (data) => {
      console.log('process completed in ', data, ' seconds.');
      this.setState({complete : true})
      socket.disconnect();
    })
  }
  parseTextData(bookFragString){
    if (bookFragString === false) return; 
    console.log('textparse',bookFragString.length,bookFragString.substring(0,25))
    var splitBook = bookFragString.split(/\b\W+\b/);
    for (var word of splitBook){
       wordFrequency[word] ? wordFrequency[word] += 1 : wordFrequency[word] = 1;
     }
     console.dir(`This is inside text parse, book data frequency is : ${JSON.stringify(wordFrequency)}`)
     socket.emit('textParseComplete', wordFrequency);
  }
  render(){
    let successMessage = this.state.complete ? <div>Finished text parsing</div> : '';
    let spinner = this.state.complete ? '' : <Spinner />
    return (
        <div className="card well well-lg">
          <article>
            This is an example of map reduce paradigm for parsing large text file.
            {spinner}
            {successMessage}
          </article>
        </div>
    )
  }
};

export default TextParse;