import React, { Component } from 'react';

const Contact = () => {
	return (
		<div>
			<div className="text-center">
				<h1>
					<a target="_blank" href="https://github.com/DeThread/dethread">
						<img className="center-block img-responsive" src="/src/images/github-logo.png" />
					</a>
				</h1>
				<p> Feel free to check us out on Github! </p>
				<div className="btn-group">
					<a target="_blank" href="https://github.com/DeThread/dethread" className="btn btn-lg btn-info">Go to Github!</a>
				</div>
			</div>

			<h2><small><hr width="50%"></hr></small></h2>

			<div className="text-center">
				<h1>
					<a target="_blank" href="https://www.npmjs.com/package/dethread">
						<img className="center-block img-responsive" src="/src/images/npm.png" />
					</a>
				</h1>
				<p> Feel free to check us out on npm! </p>
				<div className="btn-group">
					<a target="_blank" href="https://www.npmjs.com/package/dethread" className="btn btn-lg btn-info">Go to NPM!</a>
				</div>
			</div>
		</div>
		);
};

export default Contact;
