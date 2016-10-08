import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class JoinSession extends Component {
	constructor() {
		super(); 
		this.state = {
			hasMaster: false,
			isMaster: false,
		}
	}

	hosting() {
		$('.host').css('background-color', 'red');
		$('#hostLabel').text('Host In Use');
		this.setState({hasMaster: true, isMaster: true}); 
		browserHistory.push('/Performance');
	}

	render() {
		return (
				<div className="container-fluid">
					<div className="row text-center"> 
						<label id="hostLabel">Would you like to host?</label>
						<button onClick={this.hosting.bind(this)} className="host">Host</button>
					</div>
				</div>
			)
	}
}

export default JoinSession;