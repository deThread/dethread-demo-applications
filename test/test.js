import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Navbar from '../src/components/navbar';
import AboutUs from '../src/components/AboutUs';
import JoinSession from '../src/components/JoinSession';
import Performance from '../src/components/Performance';
import WorkerInput from '../src/components/workerInput'; 

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
  
  it('contains a <Participate/> component', function () {
    const wrapper = mount(<JoinSession />);
    expect(wrapper.find(Participate)).to.have.length(1);
  });

  it('contains an <Performance/> component', function () {
    const wrapper = mount(<JoinSession />);
    expect(wrapper.find(Performance)).to.have.length(1);
  });
   it('contains an <WorkerProcess/> component', function () {
    const wrapper = mount(<JoinSession />);
    expect(wrapper.find(WorkerProcess)).to.have.length(1);
  });
   
   it('contains an <Host/> component', function () {
    const wrapper = mount(<JoinSession />);
    expect(wrapper.find(Host)).to.have.length(1);
  });
   
   it('contains an <Success/> component', function () {
    const wrapper = mount(<JoinSession />);
    expect(wrapper.find(Success)).to.have.length(1);
  });

  it('should have an initial email state', function () {
    const wrapper = mount(<JoinSession />);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<JoinSession />);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  })
});

describe("Performance", function(){
  it('should have "updateSettings"', () => {
    const wrapper = mount(<Performance />);
    expect(wrapper.props().updateSettings).to.be.defined();
  });
  it('should have "md5StartDecrypt"', () => {
    const wrapper = shallow(<Performance />);
    expect(Performance.props().md5StartDecrypt).to.be.defined();
  })
  it('should set the state of JoinSession when text is added to worker length input', () => {
    const wrapper = mount(<workerInput />);
    const joinSessionWrapper = mount(<JoinSession />)
    wrapper.find('.workerInput').simulate('change', {target: {value: '3'}});
    expect(joinSessionWrapper.state().workers).to.be.defined();
    expect(joinSessionWrapper.state().workers).to.equal('3');

  })
})
describe('Worker Input', function(){
  it('should have an onChange prop', () => {
    const wrapper = shallow(<WorkerInput />);
    expect(WorkerInput.props().onChange).to.be.defined();
  })
})