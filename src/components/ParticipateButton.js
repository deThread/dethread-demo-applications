import React, { Component } from 'react';

const Participate = props => {

	return (
		<div>
			<p> Would you like to join a room to compute MD5 hash decrytpion?</p>
			<button className="btn btn-primary" onClick={props.checkMaster}>Yes</button>
		</div>
	)
}

export default Participate;