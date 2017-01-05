import React from 'react';
import Motivation from './Motivation';
import Connection from './Connection';
import HowDoesItWork from './HowDoesItWork';
import WhyJS from './Whyjs'
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <img className="center-block img-responsive" src='/dethreadBlack.png' />
          <br></br>
          <p>A library for enabling distributed computing with JavaScript.</p>
        </div>
      </div>
      <div className="container">
        <section>
          <div className="text-center" id="CSS">
            <h2> What is deThread? </h2>
            <br />
            <p>
              deThread enables developers to easily establish an in-browser distributed computing network that is fault
              tolerant, secure, and compatible with any batch, iterative process.
            </p>
            <br />
            <br />
            <Connection />
            <br />
            <br />
            <p>Traditionally, distributed computing processes have been written with lower level 
            languages such as C++ and Java. However, by using JavaScript, deThread enables the distribution
            of processes on any device with a web browser. In-browser distributed computing inherently has a 
            low barrier to entry: users can contribute to a distributed process simply by accessing a URL.</p>
          </div>
        </section>
      </div>
      <HowDoesItWork />
      <Motivation />
      <Footer />
    </div>
  );
};

export default Home;
