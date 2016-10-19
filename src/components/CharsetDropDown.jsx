import React, { Component } from 'react';

const CharsetDropDown = (props) => {
  return (
    <div>
        <select onChange={props.selectChar}>
          <option value="lower">Lowercase characters (a-z)</option>
          <option value="upperLow">Uppercase & Lowercase characters (a-zA-Z)</option>
          <option value="alphanumeric">Alphanumeric (a-zA-Z0-9)</option>
        </select>
    </div>
    );
};

export default CharsetDropDown;
