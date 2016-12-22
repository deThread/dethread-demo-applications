import React from 'react';

const Host = (props) => {
	return (
			<div className="card well well-lg">
				<div className="container-fluid">
					<div className="row text-center"> 
						<h2>Would you like to host?</h2>
						<br/>
						<button className="hostBTN btn btn-primary btn-md" onClick={props.claimMaster}>Host</button>
						<br/><br/>
						<img className="center-block img-responsive host-img" src="antenna.png" />
					</div>
				</div>
			</div>
		);
};

export default Host;
