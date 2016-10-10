import React, { Component } from 'react';

import Motivation from './Motivation';
import Connection from './Connection';
import WhyJS from './Whyjs'
import Footer from './Footer';

class AboutUs extends Component {
  render() {
    return (<div>
              <div className="jumbotron">
                <div className="container">
                  <h1>DeThread</h1>
                  <p className="subTitle">A platform for making Distributed Computing easier, all in the browser.</p>
                </div>
              </div>
              <div className="section section1">
                <h2> What is DeThread?</h2>
                <div className="textContainer">
                <article>
                  <p>DeThread is an place where users can use idle computer time to cure diseases,
                  study the environment, and participate in cutting edge, scientific research.
                  When you find a project you would like to support, simply click the link, and your computer will become
                  part of a bot-net.  Each node in the bot-net has two-way communication with the master node,
                  which distributes a process to each participating node. It's safe easy, and free, and it always will be.
                  </p>
                  <Connection />
                </article>
                </div>
              </div>
              <Motivation />
              <WhyJS />
              <Footer />
            </div>
            
          )
  }
}

export default AboutUs;
