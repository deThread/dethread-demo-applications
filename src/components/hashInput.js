import React, { Component } from 'react';

export default class HashInput extends Component{
  render() {
    return (
      <div>
        <input type="text" id="hash" name="hash" placeholder="hash" value={this.props.hash} onChange={this.props.update} />
      </div>
    )
  }
}