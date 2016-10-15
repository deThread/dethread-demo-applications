import React, { Component } from 'react';

const Host = function(props) {
	return (
			<div className="card well well-lg">
				<div className="container-fluid">
					<div className="row text-center"> 
						<p className="hostLabel">Would you like to host?</p>
						<button className="hostBTN btn btn-primary btn-md" onClick={props.claimMaster}>Host</button>
					</div>
				</div>
			</div>
		)
};

export default Host;
