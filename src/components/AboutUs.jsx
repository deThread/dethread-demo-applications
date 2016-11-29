import React, { Component } from 'react';
import Motivation from './Motivation';
import Connection from './Connection';
import HowDoesItWork from './HowDoesItWork';
import WhyJS from './Whyjs'
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>

      <div className="jumbotron">
        <div className="container">
          <img className="center-block img-responsive" src='src/images/dethreadBlack.png' />
          <br></br>
          <p>A platform for making Distributed Computing easier, all in the browser.</p>
        </div>
      </div>

      <div className="container">
        <section>
          <div className="text-center" id="CSS">
            <h2> What is deThread? </h2>
            <br />
            <p>deThread is an application library for distributed computation using the resources of website visitors.
                  deThread allows developers to easily establish an in-browser distributed computing network that is fault
                  tolerant, secure, and compatible with any batch, iterative process.
                </p>
            <br />
            <br />
          </div>
        </section>
      </div>

      <Connection />
      <HowDoesItWork />
      <Motivation />
      <WhyJS />
      <Footer />
    </div>
  );
};

export default AboutUs;
