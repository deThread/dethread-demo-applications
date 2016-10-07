import React, { Component } from 'react';

export default class WorkerInput extends Component{
render(){
  return (
    <div>
      <input type="number" name="length" placeholder="number of workers" id="workers" value={this.props.workers} min='0' max='8' onChange={this.props.update} />
    </div>
  )
}
}