import React, { Component } from 'react';


const HashInput = function(props) {
  return (
    <div>
        <input className="inputMaterial" type="text" id="hash" name="Hash" placeholder="Hash" onChange={props.updateSettings} />
        <i className="material-icons help" onClick={props.togglePopup}>help</i>
        <span className="highlight"></span>
        <span className="bar"></span>
    </div>
  )
};

export default HashInput;

