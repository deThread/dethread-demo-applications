import React, { Component } from 'react';

const CharsetDropDown = (props) => {
  return (
    <div>
        <select onChange={props.selectChar}>
          <option value="lower">Lowercase characters</option>
          <option value="upperLow">Uppercase & Lowercase characters</option>
          <option value="alphanumeric">Alphanumeric (upper and lowercase)</option>
        </select>
    </div>
    );
};

export default CharsetDropDown;
