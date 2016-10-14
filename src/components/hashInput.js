import React, { Component } from 'react';

const HashInput = function(props) {
  return (
    <div>
      <input type="text" id="hash" name="hash" placeholder="hash" onChange={props.update} />
    </div>
  )
};

export default HashInput;
