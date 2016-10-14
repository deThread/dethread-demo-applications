import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Pending from './Pending';
import Performance from './Performance';
import Participate from './Participate';
import WorkerProcess from './WorkerProcess';
import Success from './Success';
import Host from './Host';
import { startWorkers } from './PerfInputs';

let socket;

class JoinSession extends Component {
	constructor() {
		super(); 
		this.state = {
			userParticipation: false,
			ready: false,
			hasMaster: false,
			isMaster: false,
			calculating: false,
			globalConnections: undefined,
			globalWorkers: undefined,
			globalNumCombos: undefined,
			clearText: undefined,
			duration: undefined,
			length: undefined,
			workers: undefined,
			optimalWorkers: undefined,
			hash: undefined,
			begin: undefined,
			end: undefined,
		};

		this.startSocketConnection = this.startSocketConnection.bind(this);
		this.claimMaster = this.claimMaster.bind(this);
		this.updateSettings = this.updateSettings.bind(this);
		this.chooseWorkerCount = this.chooseWorkerCount.bind(this);
		this.startMD5Decrypt = this.startMD5Decrypt.bind(this);
		this.startWork = this.startWork.bind(this);
		this.passwordCracked = this.passwordCracked.bind(this);
	}

	startSocketConnection() {
		socket = io();

		socket.on('client-connected-response', (data) => {
			this.setState({ hasMaster: data.hasMaster, userParticipation: true });
		});

		socket.on('claim-master-response', (data) => {
			this.setState({ globalConnections: data.globalConnections });
		});

		socket.on('master-claimed', (data) => {
			this.setState({ hasMaster: true, globalConnections: data.globalConnections });
		});

		socket.on('new-client-ready', (data) => {
			this.setState({ globalConnections: data.globalConnections, globalWorkers: data.globalWorkers });
		});

		socket.on('start-work', this.startWork);

		socket.on('password-found', (data) => {
			console.log('password-found', data);
			this.setState({ clearText: data.clearText, duration: data.duration });
		});

		socket.on('connect_error', (e) => {
		  console.log('connection error', socket.id);
		});

		socket.on('reconnect', () => {
		  console.log('socket reconnected', socket.id);
		})

		socket.on('reconnect_error', (e) => {
		  console.log('reconnect connection error', socket.id);
		})

		const optimalWorkers = (navigator.hardwareConcurrency / 2) + 1;
		this.setState({ optimalWorkers });
	}

	claimMaster() {
		socket.emit('claim-master');
		this.setState({ hasMaster: true, isMaster: true, ready: true });
	}

	updateSettings(name, e) {
	  const toChange = name;
	  const stateVal = this.state[toChange];
	  const stateUpdate = {};
	  if (name === 'workers' || name === 'length' ) stateUpdate[toChange] = Number(e.target.value);
	  else stateUpdate[toChange] = e.target.value;
	  this.setState(stateUpdate);   
	}

	chooseWorkerCount() {
		socket.emit('client-ready', { ready: true, workers: this.state.workers });
		this.setState({ ready: true });
	}

	startMD5Decrypt() {
	  console.log('start decryption hash', this.state.hash);
	  socket.emit('start-decryption', { hash: this.state.hash, length: this.state.length, workers: this.state.workers });
	}

	startWork(data) {
		const newState = {
			startTime: data.startTime,
			length: data.length,
			globalNumCombos: data.globalNumCombos,
			hash: data.hash,
			begin: data.begin,
			end: data.end,
			calculating: true,
		};

		startWorkers(this.passwordCracked, data.begin, data.end, this.state.workers, data.hash, data.length, data.startTime);
		this.setState(newState);
	}

	passwordCracked(clearText, duration) {
		const data = {
			clearText,
			duration,
		};
		
		socket.emit('password-cracked', data);
		this.setState(data);
	}

	render() {
		const sessionView = !this.state.userParticipation ? <Participate startSocketConnection={this.startSocketConnection} /> 
						 : !this.state.hasMaster ? <Host claimMaster={this.claimMaster} /> 
						 : this.state.isMaster ? <Performance {...this.state} updateSettings={this.updateSettings} startMD5Decrypt={this.startMD5Decrypt} /> 
						 : !this.state.calculating || !this.state.ready ? <Pending ready={this.state.ready} optimalWorkers={this.state.optimalWorkers} workers={this.state.workers} updateSettings={this.updateSettings} chooseWorkerCount={this.chooseWorkerCount} globalConnections={this.state.globalConnections} />
						 : <WorkerProcess {...this.state} />;
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