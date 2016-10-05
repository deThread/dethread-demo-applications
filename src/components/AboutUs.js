import React, { Component } from 'react';

import Motivation from './Motivation';
import Footer from './Footer';

class AboutUs extends Component {
  render(){
    return (<div>
              <div className="jumbotron">
                <div className="container">
                  <h1>Distributed Computing<br/> For Teams</h1>
                  <p>We aim to connect things together to make things faster.</p>
                  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn mas &raquo;</a></p>
                </div>
              </div>
              <div className="section1">
                <h2> Why Distributed Computing for Teams ? </h2>
                <div className="textContainer">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis, nunc at varius sagittis, ligula est suscipit odio, sed cursus lectus nunc vel nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse a ligula hendrerit, consequat nisi sit amet, pretium neque. Ut vehicula ac lorem id feugiat. Nunc massa lectus, consequat at augue sit amet, pellentesque vulputate justo. Sed finibus eros ante. Ut at tellus id dolor commodo dapibus id vitae massa. Mauris ac pulvinar enim, eu cursus est. Phasellus in mi sed sem elementum vulputate.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis, nunc at varius sagittis, ligula est suscipit odio, sed cursus lectus nunc vel nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse a ligula hendrerit, consequat nisi sit amet, pretium neque. Ut vehicula ac lorem id feugiat. Nunc massa lectus, consequat at augue sit amet, pellentesque vulputate justo. Sed finibus eros ante. Ut at tellus id dolor commodo dapibus id vitae massa. Mauris ac pulvinar enim, eu cursus est. Phasellus in mi sed sem elementum vulputate.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis, nunc at varius sagittis, ligula est suscipit odio, sed cursus lectus nunc vel nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse a ligula hendrerit, consequat nisi sit amet, pretium neque. Ut vehicula ac lorem id feugiat. Nunc massa lectus, consequat at augue sit amet, pellentesque vulputate justo. Sed finibus eros ante. Ut at tellus id dolor commodo dapibus id vitae massa. Mauris ac pulvinar enim, eu cursus est. Phasellus in mi sed sem elementum vulputate.</p>
                </div>
              </div>
              <Motivation />
              <Footer />
            </div>
            
          )
  }
}

export default AboutUs;