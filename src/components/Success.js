import React, { Component } from 'react';

class Success extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div>
              <div className="success well well-lg">
                <p>Found {this.props.pw} in {this.props.duration} seconds</p>
              </div>
            </div>)
  }
}

export default Success;