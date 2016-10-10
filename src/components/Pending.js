import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Pending extends Component {
	render() {
		return (
			<div className="container pending"> 
				<h1>Waiting for host to start . . .</h1>
				<p>There are currently 2 clients in the room.</p>
				<div className="container spinner">
					 <div className="any-element animation is_loading">
  				 	&nbsp;
  				 </div>
				</div>
			</div> 
		)
	}
}

export default Pending; 