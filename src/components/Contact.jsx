import React, { Component } from 'react';

const Contact = () => {
	return (
		<div>
				<div className="container">
					<h1><strong>Check out the Library!</strong></h1>
					<div className="row">
						<div className="col-sm-6 text-center">					
							<img className="site-logo center-block img-responsive" src="/github-logo.png" />
							<br/>
							<a target="_blank" href="https://github.com/DeThread/dethread" 
								 className="btn btn-lg btn-info btn-go">Go to Github!</a>
						</div> 
						<div className="col-sm-6 text-center">
							<img className="site-logo center-block img-responsive" src="/npm.png" />
							<br/>
							<a target="_blank" href="https://www.npmjs.com/package/dethread" 
							   className="btn btn-lg btn-info btn-go">Go to NPM!</a>
						</div> 	
					</div>
				<br/>
				<hr/>
				<h2> Created By </h2>
				<br/>
				<div className="row">
					<div className="col-md-4 text-center"> 
						<img className="profile-img" src="/bryan.jpg" />
						<br/>
						<div>
							<h3>Bryan Yee</h3>
							<a className="active" target="_blank" href="https://www.linkedin.com/in/bryan-yee">
								<img className="icons img-thumbnail" src="/linkedin.png"/>
							</a>
							<a className="active" target="_blank" href="https://github.com/bryanyee">
								<img className="icons img-thumbnail" src="/github-icon.png"/>
							</a>
							<a className="active" target="_blank" href="https://www.facebook.com/bryan.yee.92">
								<img className="icons img-thumbnail" src="/facebook.png"/>
							</a>
						</div>
					</div>
					<div className="col-md-4 text-center"> 
						<img className="profile-img" src="/daniel.jpg"/>
						<br/>
						<div>
							<h3>Daniel Lao</h3>
							<a className="active" target="_blank" href="https://www.linkedin.com/in/dalao">
								<img className="icons img-thumbnail" src="/linkedin.png"></img>
							</a>
							<a className="active" target="_blank" href="https://github.com/Dlaosb">
								<img className="icons img-thumbnail" src="/github-icon.png"/>
							</a>
							<a className="active" target="_blank" href="https://www.facebook.com/daniellaosb">
								<img className="icons img-thumbnail" src="/facebook.png"/>
							</a>
						</div>
					</div>
					<div className="col-md-4 text-center">
						<img className="profile-img" src="/shawn.jpg"/>
						<br/>
						<div>
							<h3>Shawn Southwell</h3>
							<a className="active" target="_blank" href="https://www.linkedin.com/in/shawn-southwell">
								<img className="icons img-thumbnail" src="/linkedin.png"></img>
							</a>
							<a className="active" target="_blank" href="https://github.com/shawn-southwell">
								<img className="icons img-thumbnail" src="/github-icon.png"/>
							</a>
							<a className="active" target="_blank" href="https://www.facebook.com/shawn.southwell.18">
								<img className="icons img-thumbnail" src="/facebook.png"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
};

export default Contact;
