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
				<div className="card well well-lg">
					<p> Would you like to join a room to compute MD5 hash decryption? </p>
					<button className="partBTN btn btn-primary" onClick={this.notifyServer}>Yes</button>
					<article className="partText">
					To demonstrate the efficacy of browser side distributed computing, we have hosted an MD5 decryption script.
					If you would like to learn more about MD5 hash, feel free to visit {link}. When you join the room, we will distribute a portion of the script dependent upon your computer's hardware.
					Upon success, all users sharing the process will be notified.
					</article>
					{spinner}
				</div>
		)
	}
};

export default Participate;
