import React, { Component } from 'react';

export default class HashInput extends Component{
render(){
  return (
    <div>
      <input type="text" name="hash" placeholder="hash" id="hash" value={this.props.hash} onChange={this.props.update} />
    </div>
  )
}
}