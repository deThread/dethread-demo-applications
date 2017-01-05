import React from 'react';

const WorkerInput = (props) => {
  return (
    <div>
      <input className="inputMaterial numInput" type="number" id="workers" placeholder="Number of Workers" name="workers" min="1" max={`${props.optimalWorkers}`} onChange={props.updateSettings} />
      <i className="material-icons help-button" onClick={props.togglePopup.bind(null, '#worker-info')}>help</i>
      <span className="highlight"></span>
      {/* <span className="bar"></span>*/}
    </div>
  );
};

export default WorkerInput;
