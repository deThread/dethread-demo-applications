import React, { Component } from 'react';

const Host = (props)=> {
	return (
			<div className="container-fluid">
				<div className="row text-center"> 
					<label id="hostLabel">Would you like to host?</label>
					<button onClick={props.masterSelect} className="host">Host</button>
					
				</div>
			</div>
		)
}

export default Host 