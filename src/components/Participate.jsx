import React, { Component } from 'react';
import Spinner from './Spinner';

class Participate extends Component {
	constructor() {
		super();
		this.state = { waiting: false };

		this.notifyServer = this.notifyServer.bind(this);
	}

	notifyServer() {
		this.props.startSocketConnection();
		this.setState({ waiting: true });
	}

	render() {
		const link = <a target="_blank" href="https://en.wikipedia.org/wiki/MD5">here</a>;
		const spinner = (this.state.waiting) ? <Spinner /> : '';

		return (
				<div className="card well well-lg well-overflow">
					<p> Would you like to join a room to compute MD5 hash decryption? </p>
					<button className="partBTN btn btn-primary" onClick={this.notifyServer}>Yes</button>
					<br />
					<br />
					<p className="partText">
					To demonstrate the efficacy of distributed computing with JavaScript, we have hosted an MD5 hash decryption script.
					When you join the room, we will distribute a portion of the script dependent upon your computer's hardware. 
					Upon success, all users sharing the process will be notified of the decrypted clear text!
					</p>
					<br />
					<p>If you would like to learn more about MD5 hash decryption, feel free to visit {link}.</p>
					{spinner}
					<br />
					<br />
					<p>Below is a speed performance comparison for brute force cracking the MD5 hash for "zzzzzy" using different 
					configurations of clients and web workers. The decryption of a six-letter lowercase word consists 
					of over 308 million permutations:</p>
					<br />
					<img className="img-responsive img-border" src="src/images/comparison-graph.png"/>
				</div>
		)
	}
};

export default Participate;
