import React, { Component } from 'react';


const HashInput = function(props) {
  return (
    <div>
        <input className="inputMaterial" type="text" id="hash" name="Hash" placeholder="hash" onChange={props.updateSettings} />
        <span className="highlight"></span>
        <span className="bar"></span>
        <i className="material-icons help" onClick={props.togglePopup}>help</i>
    </div>
  )
};

export default HashInput;
