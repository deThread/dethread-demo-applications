import React, { Component } from 'react';

const HashInput = function(props) {
  return (
    <div>
      <input type="text" id="hash" name="hash" placeholder="hash" onChange={props.updateSettings} />
    </div>
  )
};

export default HashInput;
