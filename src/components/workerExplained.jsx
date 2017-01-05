import React from 'react';

const WorkerExplained = () => {
  return (
    <div>
      <div id="worker-info" className="popup instruction-box">
        <p className="instruction-title">What are web workers?</p>
        <p>Web workers are a technology that allow a web browser to run multiple
        simultaneous scripts without interfering with the web page. By allowing the
        running of multiple web workers, your web browser will be able to process
        multiple tasks at the same time, at the expense of CPU resources.</p>
      </div>
    </div>
  );
};

export default WorkerExplained;
