import React from 'react';

const StateHeader = (props) => {
  const clearText = props.clearText || '';
  const className = ('state-header').concat(!props.clearText ? ' bc-lb' : '');
  const clientType = props.isMaster ? 'Host' : 'Client'

  return (
    <div className={className}>
      <span className="client-type">{clientType}</span>
      <h2>{props.title}: <em>{clearText}</em>
        <br/>{props.hash}
      </h2>
    </div>
  );
};

export default StateHeader;