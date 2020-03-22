import React from 'react';
import './App.css';
import Facepage from '../Facepage/Facepage.js';
import Describepage from '../Describepage/Describepage.js';
import Namepage from '../Namepage/Namepage.js';
import Export from '../Export/Export.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
    this.changeStepNext = this.changeStepNext.bind(this);
    this.changeStepPrev = this.changeStepPrev.bind(this);
  }

  componentDidMount() {
    console.log(this.state.currentStep);
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

  render() {
    console.log('current step: ', this.state.currentStep);
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
        <Describepage changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev} />
        <Namepage changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev} />
        <Export changeStepPrev={this.changeStepPrev} />
      </div>
    );
  }
}

export default App;
