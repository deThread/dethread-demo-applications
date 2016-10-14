import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Pending from './Pending';
import Performance from './Performance';
import Participate from './Participate';
import WorkerProcess from './WorkerProcess';
import Success from './Success';
import Host from './Host';

let socket;
let dataFromHost;

class JoinSession extends Component {
	constructor() {
		super(); 
		this.state = {
			userParticipation: false,
			hasMaster: false,
			isMaster: false,
			calculating: false,
			hasSolution: false,
			clearText: undefined,
			duration: undefined,
			length: undefined,
			workers: undefined,
			optimalWorkers: undefined,
			hash: undefined,
		};

		this.startSocketConnection = this.startSocketConnection.bind(this);
		this.claimMaster = this.claimMaster.bind(this);
	}

	startSocketConnection() {
		socket = io();

		socket.on('connect', () => {
			socket.emit('client-connected');
		});

		socket.on('master-selected', (data) => {
			this.setState({ hasMaster: data, userParticipation: true });
		});

		socket.on('master-claimed', () => {
			this.setState({ hasMaster: true });
		});
	}

	claimMaster() {
		socket.emit('claim-master')
		this.setState({ hasMaster: true, isMaster: true });
	}


	render() {
		const sessionView = !this.state.userParticipation ? <Participate startSocketConnection={this.startSocketConnection} /> 
						 : !this.state.hasMaster ? <Host claimMaster={this.claimMaster} /> 
						 : this.state.isMaster ? <Performance p2p={p2p} pw={this.state.clearText} duration={this.state.duration} success={this.state.hasSolution} onSolution={this.onSolution} calculating={this.state.calculating}/> 
						 : !this.state.calculating ? <Pending /> : <WorkerProcess p2p={p2p} data={dataFromHost} pw={this.state.clearText} duration={this.state.duration} success={this.state.hasSolution} onSolution={this.onSolution} />;
		return (	<div>
								{sessionView}
							</div>
		)
	}
}

export default JoinSession;


// import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
// import Pending from './Pending.js';
// import Performance from './Performance.js';
// import Participate from './ParticipateButton.js';
// import WorkerProcess from './workerProcess';
// import Success from './Success';
// import Host from './Host.js';

// let socket;
// let dataFromHost;

// class JoinSession extends Component {
// 	constructor() {
// 		super(); 
// 		this.state = {
// 			hasMaster: false,
// 			isMaster: false,
// 			userParticipation: false,
// 			calculating: false,
// 			hasSolution: false,
// 			clearText: "",
// 			duration: null
// 		};
// 		this.checkMaster = this.checkMaster.bind(this);
// 		this.hosting = this.hosting.bind(this);
// 		this.onSolution = this.onSolution.bind(this);
// 	}

// 	componentDidMount() {
	
// 	}

// 	checkMaster() {
// 		socket = io();
// 		const opts = { numClients : 10 }
// 		p2p = new P2P(socket,opts);

// 		p2p.on('connect', () => {
// 			console.log('connection formed!');
// 		});

// 		p2p.on('masterChosen', () => {
// 			console.log('You Are now a Slave');
// 			this.setState({ hasMaster: true });
// 		});

// 		p2p.on('starting to crack', (data) => {
// 			dataFromHost = JSON.stringify(data);
// 			console.log(`Host started crack. Received data from host: ${dataFromHost}`);
// 			this.setState({ calculating: true });
// 		});
		
// 		p2p.on('crackedPassword', (data) => {
// 			console.log('success (data)', data);
// 			console.log(`Password has been found in ${data.duration} seconds: ${data.clearText}`);
// 			console.log('IN CRACKED PASSWORD EMIT LISTENER')
// 			const foundPW = data.clearText, duration = data.duration;
// 			const stateObj = {};
// 			stateObj['hasSolution'] = true;
// 			stateObj['clearText'] = foundPW;
// 			stateObj['duration'] = duration;
// 			console.log(stateObj);
// 			this.setState(stateObj);
// 		});

// 		this.setState({ userParticipation: true });
// 	}

// 	hosting() {		
// 		p2p.emit('masterChosen');
// 		this.setState({ hasMaster: true, isMaster: true }); 
// 	}

// 	onSolution(foundPW, duration){
// 		const stateObj = {};
// 		stateObj['hasSolution'] = true;
// 		stateObj['clearText'] = foundPW;
// 		stateObj['duration'] = duration;
// 		this.setState(stateObj);
// 	}
	
// 	render() {
// 		const sessionView = !this.state.userParticipation ? <Participate checkMaster={this.checkMaster} /> 
// 						 : !this.state.hasMaster ? <Host masterSelect={this.hosting} /> 
// 						 : this.state.isMaster ? <Performance p2p={p2p} pw={this.state.clearText} duration={this.state.duration} success={this.state.hasSolution} onSolution={this.onSolution} calculating={this.state.calculating}/> 
// 						 : !this.state.calculating ? <Pending /> : <WorkerProcess p2p={p2p} data={dataFromHost} pw={this.state.clearText} duration={this.state.duration} success={this.state.hasSolution} onSolution={this.onSolution} />;
// 		return (<div>
// 							{sessionView}
// 						</div>
// 		)
// 	}
// }

// export default JoinSession;