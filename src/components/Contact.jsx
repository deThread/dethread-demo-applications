import React, { Component } from 'react';
import { terminateAllWorkers } from '../workerController';
import { disconnectSocket } from '../Socket';

class Contact extends Component {

	componentDidMount() {
	  terminateAllWorkers();
	  disconnectSocket(); 
	}

	render() {
  	return (
			<div> This is the Contact page!</div>

			
		)
  }

};

export default Contact;
