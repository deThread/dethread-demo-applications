import React, { Component } from 'react';


class HashInput extends Component {
  render() {
    return (
      <div>
        <input className="inputMaterial" type="text" id="hash" name="Hash" placeholder="Hash" onChange={this.props.updateSettings} />
        <i className="material-icons help-button" onClick={this.props.togglePopup.bind(null, '#hash-info')}>help</i>
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
    );
  }
}

export default HashInput;
