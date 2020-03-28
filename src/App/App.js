import React from 'react';
import './App.css';
import Facepage from '../Facepage/Facepage.js';
import Describepage from '../Describepage/Describepage.js';
import Namepage from '../Namepage/Namepage.js';
import Export from '../Export/Export.js';
import {API_ENDPOINT} from '../config.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      a1: ' ',
      a2: ' ',
      a3: ' ',
      a4: ' ',
      a5: ' ',
      a6: ' ',
      mainFace: ' ',
      faces: [],
      fetchURL: API_ENDPOINT
    };
    this.changeStepNext = this.changeStepNext.bind(this);
    this.changeStepPrev = this.changeStepPrev.bind(this);
    this.getA1 = this.getA1.bind(this);
    this.getA2 = this.getA2.bind(this);
    this.getA3 = this.getA3.bind(this);
    this.getA4 = this.getA4.bind(this);
    this.getA5 = this.getA5.bind(this);
    this.getA6 = this.getA6.bind(this);
  }

  componentDidMount() {
    
  }

  changeStepNext() {
    this.setState(prevState => {

      return {currentStep: prevState.currentStep + 1}
    });
  }
  changeStepPrev() {
    this.setState(prevState => {
      return {currentStep: prevState.currentStep - 1}
    });

  }

  getA1(event) {
    this.setState({
      a1: event.target.value
    })
  }
  getA2(event) {
    this.setState({
      a2: event.target.value
    })
  }
  getA3(event) {
    this.setState({
      a3: event.target.value
    })
  }
  getA4(event) {
    this.setState({
      a4: event.target.value
    })
  }
  getA5(event) {
    this.setState({
      a5: event.target.value
    })
  }
  getA6(event) {
    this.setState({
      a6: event.target.value
    })
  }

  render() {
    console.log('current step: ', this.state.currentStep);
    console.log(this.state.a1, this.state.a2, this.state.a3, this.state.a4, this.state.a5, this.state.a6);
    let wrapper;
    if (this.state.currentStep === 1) {
      wrapper = (
          <div className="navwrapper">
            <div className="navbar">
              <div className="navdiv navdark">
                <p className="navbutton" href="#facepage" id="step1">Choose a face</p>
              </div>
              <div className="navdiv">
                <p className="navbutton" href="#describepage" id="step2">Describe your Darling</p>
              </div>
              <div className="navdiv">
                <p className="navbutton" href="#namepage" id="step3">Name your Darling</p>
              </div>
              <div className="navdiv">
                <p className="navbutton" href="#export" id="step4">Save your Darling</p>
              </div>
            </div>
        </div>
      )
    } else if (this.state.currentStep === 2) {
      wrapper = (
          <div className="navwrapper">
            <div className="navbar">
              <div className="navdiv">
                <p className="navbutton" href="#facepage" id="step1">Choose a face</p>
              </div>
              <div className="navdiv navdark">
                <p className="navbutton" href="#describepage" id="step2">Describe your Darling</p>
              </div>
              <div className="navdiv">
                <p className="navbutton" href="#namepage" id="step3">Name your Darling</p>
              </div>
              <div className="navdiv">
                <p className="navbutton" href="#export" id="step4">Save your Darling</p>
              </div>
            </div>
          </div>
      )
    } else if (this.state.currentStep === 3) {
      wrapper = (
          <div className="navwrapper">
            <div className="navbar">
              <div className="navdiv">
                <p className="navbutton" href="#facepage" id="step1">Choose a face</p>
              </div>
              <div className="navdiv">
                <p className="navbutton" href="#describepage" id="step2">Describe your Darling</p>
              </div>
              <div className="navdiv navdark">
                <p className="navbutton navdark" href="#namepage" id="step3">Name your Darling</p>
              </div>
              <div className="navdiv">
                <p className="navbutton" href="#export" id="step4">Save your Darling</p>
              </div>
            </div>
        </div>
      )
    } else if (this.state.currentStep === 4) {
      wrapper = (
        <div className="navwrapper">
          <div className="navbar">
            <div className="navdiv">
              <p className="navbutton" href="#facepage" id="step1">Choose a face</p>
            </div>
            <div className="navdiv">
              <p className="navbutton" href="#describepage" id="step2">Describe your Darling</p>
            </div>
            <div className="navdiv">
              <p className="navbutton" href="#namepage" id="step3">Name your Darling</p>
            </div>
            <div className="navdiv navdark">
              <p className="navbutton navdark" href="#export" id="step4">Save your Darling</p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="app">
        {wrapper}

        <Facepage changeStepNext={this.changeStepNext} />
        <Describepage changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev} getA1={this.getA1} getA2={this.getA2} getA3={this.getA3} getA4={this.getA4} getA5={this.getA5} getA6={this.getA6} />
        <Namepage changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev} occupation={this.state.a2} age={this.state.a3}/>
        <Export changeStepPrev={this.changeStepPrev} />
      </div>
    );
  }
}

export default App;
