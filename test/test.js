import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Navbar from '../src/components/navbar';
import AboutUs from '../src/components/AboutUs';
import JoinSession from '../src/components/JoinSession';
import Performance from '../src/components/Performance';

describe("Navbar", function() {
  it("contains one nav tag", function() {
    const wrapper = mount(<Navbar />);
    expect(wrapper.find('nav')).to.have.length(1);
  });
});

describe("AboutUs", function(){
   it('calls componentDidMount', () => {
    sinon.spy(AboutUs.prototype, 'componentDidMount');
    const wrapper = mount(<AboutUs />);
    expect(AboutUs.prototype.componentDidMount).to.have.property('callCount', 1);
    AboutUs.prototype.componentDidMount.restore();
  });
})

describe("Join Session", function(){
   it('calls componentDidMount', () => {
    sinon.spy(JoinSession.prototype, 'componentDidMount');
    const wrapper = mount(<JoinSession />);
    expect(JoinSession.prototype.componentDidMount).to.have.property('callCount', 1);
    JoinSession.prototype.componentDidMount.restore();
  });
})

describe("Performance", function(){
  it('should get props', () => {
    const wrapper = shallow(<Performance />);
    expect(Performance.props().updateSettings).to.be.defined();
    expect(Performance.props().startMD5Decrypt).to.be.defined();
  })
})