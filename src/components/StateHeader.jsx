import React from 'react';

const StateHeader = (props) => {
  const clearText = props.clearText ? <span className="found-clear-text"><br/> {props.clearText}</span> : '';

  return (
    <div className="state-header">
      <h2> {props.title}
        <br/> {props.hash}
        {clearText}  
      </h2>
    </div>
  );
};

export default StateHeader;