import React, { Component } from 'react';

const Participate = props => {
	const link = <a target="_blank" href="https://en.wikipedia.org/wiki/MD5">here</a>;
	return (
			<div className="card well well-lg">
				<p> Would you like to join a room to compute MD5 hash decrytpion? </p>
				<button className="partBTN btn btn-primary" onClick={props.checkMaster}>Yes</button>
				<article className="partText">
				To demonstrate the efficacy of browser side distributed computing, we have hosted an MD5 decryption script.
				If you would like to learn more about MD5 hash, feel free to visit {link}. When you join the room, we will distribute a portion of the script dependent upon your computer's hardware.
				Upon success, all users sharing the process will be notified.
				</article>
			</div>
	)
}

export default Participate;