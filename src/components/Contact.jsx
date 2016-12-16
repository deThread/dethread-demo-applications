import React, { Component } from 'react';

const Contact = () => {
	return (
		<div className="container">
			<h1><strong>Check us out!</strong></h1>
			<div className="row">
				<div className="col-sm-6 text-center">					
					<img className="image-set-git" src="/github.png" />
					<br/>
					<a target="_blank" href="https://github.com/DeThread/dethread" 
						 className="btn btn-lg btn-info btn-go">Go to Github!</a>
				</div> 
				<div className="col-sm-6 text-center">
					<img className="image-set-git" src="/npm.png" />
					<br/>
					<a target="_blank" href="https://www.npmjs.com/package/dethread" 
					   className="btn btn-lg btn-info btn-go">Go to NPM!</a>
				</div> 	
			</div>
			<br/>
			<hr/>
			<h2> Created By </h2>
				<div className="row">
					<div className="col-md-4 text-center"> 
						<img className="image-set" src="/bryan.jpg" />
						<h3>Bryan Yee</h3>
					</div>
					<div className="col-md-4 text-center"> 
						<img className="image-set" src="/D1.jpg"/>
						<h3>Daniel Lao</h3>
					</div>
					<div className="col-md-4 text-center">
						<img className="image-set" src="/shawn.jpg"/>
						<h3>Shawn Southwell</h3>								
					</div>
				</div>
		</div>
		
		);
};

export default Contact;
