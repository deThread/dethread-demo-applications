import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PendingWorkers from './PendingWorkers';
import PendingStart from './PendingStart';

const Pending = function(props) {
	const pending = !props.ready ? <PendingWorkers optimalWorkers={props.optimalWorkers} updateSettings={props.updateSettings} chooseWorkerCount={props.chooseWorkerCount} />
									: <PendingStart globalConnections={props.globalConnections} workers={props.workers} />;

	return (<div>
						<div className="card well well-lg">
							<div className="pending"> 
								{pending}
							</div> 
						</div>
					</div>
					)
};

export default Pending;
