import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Pending extends Component {
	render() {
		return (
			<div className="container"> 
				<h1>Currently Waiting to Start Cracking</h1>
				<div className="row text-center">
					<button type="button" className="btn btn-default">
						<span className="glyphicon glyphicon-repeat fast-right-spinner"></span>
					</button>
				</div>
			</div> 
		)
	}
}

export default Pending; 