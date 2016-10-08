import React, { Component } from 'react';

const Participate = (props)=> {

	return (
		<div>
			<p> Would you like to participate in a group MD5 decryption effort?</p>
			<button className="btn btn-primary" onClick={props.checkMaster}>Sure!</button>
		</div>
	)
}

export default Participate;