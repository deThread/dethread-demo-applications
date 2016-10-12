import React, { Component } from 'react';

export default class LengthInput extends Component{
  render() {
    return (
      <div>
        <input type="number" id="length" name="length" placeholder="length" value={this.props.len} min='0' onChange={this.props.update} />
      </div>
    )
  }
}