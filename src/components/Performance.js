import React, { Component } from 'react';
import NavLink from './NavLink';

class Performance extends Component{
  constructor(props){
    super(props);
    this.state = {hasUserConnected : false}
    this.verifyConnectionSuccess = this.verifyConnectionSuccess.bind(this);
  }

  verifyConnectionSuccess(e){
    // wait for server response, if success:
    e.preventDefault();
    console.log('verifying user');
    this.setState({hasUserConnected: true})
  }
  render(){
    return(<div>
              <div className="perfContainer">
                <div className="card well well-lg">
                  <h2> MD5 Hash Decrypt Participation </h2>
                  <div className="data well well-sm">
                    <p> Image of graphed data will maybe go here? </p>
                  </div>
                  <p> Would you like to participate in a group MD5 decryption effort? </p>
                  <button className="goToRTC btn btn-primary" onClick={this.verifyConnectionSuccess}>Sure!</button>
                </div>
              </div>
          </div>
          )
  }
}

export default Performance;