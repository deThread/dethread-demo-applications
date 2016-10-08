import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Pending from './Pending.js';
import Performance from './Performance.js';
import Participate from './ParticipateButton.js';
import Host from './Host.js';
import P2P from 'socket.io-p2p';
import io from 'socket.io-client';

let socket;
let p2p;

class JoinSession extends Component {
	constructor() {
		super(); 
		this.state = {
			hasMaster: false,
			isMaster: false,
			userParticipation: false
		}
		this.checkMaster = this.checkMaster.bind(this);
		this.hosting = this.hosting.bind(this);
	}

	componentDidMount() {

	}

	checkMaster() {
		socket = io();
		p2p = new P2P(socket);

		p2p.on('connect', () => {
			console.log("connection formed!!");
			p2p.emit('checkMaster');
		});

		p2p.on('masterChosen', () => {
			console.log(`You Are now a Slave`);
			this.setState({hasMaster: true});
		})
		
		p2p.on('checkMaster', () => {
			console.log('AG')
			//p2p.emit('availableMaster', this.state.hasMaster);
		})
		// p2p.on('availableMaster', (res) => {
		// 	if (!this.state.hasMaster && res){
		// 		this.setState({hasMaster : res});
		// 	} 
		// 	console.log('generalStatement')
		// })
		

		this.setState({userParticipation: true});
	}

	hosting() {		
		//p2p.emit('newClientConnection', {cores: navigator.hardwareConcurrency});
		p2p.emit('masterChosen');
		//setInterval(function(){p2p.emit('availableMaster')},50);
		this.setState({hasMaster: true, isMaster: true}); 
	}

	render() {

		const sessionView = !this.state.userParticipation ? <Participate checkMaster={this.checkMaster}/> 
						 : !this.state.hasMaster ? <Host masterSelect={this.hosting}/> 
						 : this.state.isMaster ? <Performance /> 
						 : <Pending />; 

		return sessionView
		
	}
}

export default JoinSession;