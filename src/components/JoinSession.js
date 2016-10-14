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
			numConnections: undefined,
			clearText: undefined,
			duration: undefined,
			length: undefined,
			workers: undefined,
			optimalWorkers: undefined,
			hash: undefined,
		};

		this.startSocketConnection = this.startSocketConnection.bind(this);
		this.claimMaster = this.claimMaster.bind(this);
		this.update = this.update.bind(this);
		this.startMD5Decrypt = this.startMD5Decrypt.bind(this);
	}

	startSocketConnection() {
		socket = io();

		socket.on('connect', () => {
			socket.emit('client-connected');
		});

		socket.on('master-selected', (data) => {
			this.setState({ hasMaster: data.hasMaster, numConnections: data.numConnections, userParticipation: true });
		});

		socket.on('master-claimed', () => {
			this.setState({ hasMaster: true });
		});

		const optimalWorkers = (navigator.hardwareConcurrency / 2) + 1;
		this.setState({optimalWorkers});
	}

	claimMaster() {
		socket.emit('claim-master')
		this.setState({ hasMaster: true, isMaster: true });
	}

	// need to fix
	update(name, e) {
	  console.log(this.state);
	  const toChange = name;
	  const stateVal = this.state[toChange];
	  const stateUpdate = {};
	  stateUpdate[toChange] = e.target.value;
	  this.setState(stateUpdate);   
	}

	// need to fix
	startMD5Decrypt() {
	  console.log('start decryption');
	  this.setState({hasStarted : true})
	  const numCombos = Math.pow(26, this.state.length);
	  const clientFrag = Math.round(numCombos / this.state.numClients);

	  const hostBegin = 0;
	  const hostEnd = clientFrag - 1;
	  const clientBegin = clientFrag;
	  const clientEnd = clientBegin + (clientFrag - 1);

	  const startTime = Date.now();

	  this.props.p2p.emit('starting to crack', { begin: clientBegin, end: clientEnd, hash: this.state.hash, startTime, length: +this.state.length });
	  startWorkers(this.props.onSolution,this.props.p2p, hostBegin, hostEnd,
	               +this.state.workers, this.state.hash, 
	               startTime, +this.state.length);
	}

	render() {
		const sessionView = !this.state.userParticipation ? <Participate startSocketConnection={this.startSocketConnection} /> 
						 : !this.state.hasMaster ? <Host claimMaster={this.claimMaster} /> 
						 : this.state.isMaster ? <Performance {...this.state} update={this.update} startMD5Decrypt={this.startMD5Decrypt} onSolution={this.onSolution} /> 
						 : !this.state.calculating ? <Pending /> : <WorkerProcess data={dataFromHost} clearText={this.state.clearText} duration={this.state.duration} success={this.state.hasSolution} onSolution={this.onSolution} />;
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