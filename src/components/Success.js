import React, { Component } from 'react';

class Success extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const dur = this.props.duration <= 1 ? 'second' : 'seconds';
    return (<div>
              <div className="success">
                <h2> Success! </h2>
                <p className="successText">We found this password : {this.props.pw} in {this.props.duration} {dur}</p>
              </div>
            </div>)
  }
}

export default Success;