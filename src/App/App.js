import React from 'react';
import './App.css';
import Facepage from '../Facepage/Facepage.js';
import Describepage from '../Describepage/Describepage.js';
import Namepage from '../Namepage/Namepage.js';
import Export from '../Export/Export.js';
import Intro from '../Intro/Intro.js'
import {API_ENDPOINT} from '../config.js';
import {Switch, Route, BrowserRouter} from "react-router-dom";
const images = require.context('../images/', true);


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
      name: ' ',
      mainFace: Math.floor(Math.random() * 100),
      faces: [],
      fetchURL: API_ENDPOINT,
      info: [],
      nameURL: 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole',
      bg: 'background1',
      selectedGender: 'all',
      selectedAge: 'all'
    };
    this.changeStepNext = this.changeStepNext.bind(this);
    this.changeStepPrev = this.changeStepPrev.bind(this);
    this.changeBg = this.changeBg.bind(this);
    this.changeMainFace = this.changeMainFace.bind(this);
    this.randomFace = this.randomFace.bind(this);
    this.filterFaces = this.filterFaces.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.getName = this.getName.bind(this);
    this.setName = this.setName.bind(this);
    this.getA1 = this.getA1.bind(this);
    this.getA2 = this.getA2.bind(this);
    this.getA3 = this.getA3.bind(this);
    this.getA4 = this.getA4.bind(this);
    this.getA5 = this.getA5.bind(this);
    this.getA6 = this.getA6.bind(this);
    this.setFaces = this.setFaces.bind(this);
  }

  componentDidMount() {
    fetch(`${this.state.fetchURL}api/faces`)
      .then(res => res.json())
      .then(res => this.setState({
        faces: res
      }))
  }

  changeBg(e) {
    e.preventDefault();
    this.setState({
      bg: e.currentTarget.getAttribute('id')
    })
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

  changeMainFace(e) {
    this.setState({
      mainFace: e.currentTarget.getAttribute('id')
    })
  }

  randomFace() {
    this.setState({
      mainFace: Math.floor(Math.random() * 100)
    })
  }

  filterFaces() {
    if (this.state.selectedGender === 'all' && this.state.selectedAge === 'all') {
      this.setFaces(`${this.state.fetchURL}api/faces`)
    } else if (this.state.selectedGender === 'all') {
      this.setFaces(`${this.state.fetchURL}api/faces/ages/${this.state.selectedAge}`)
    } else if (this.state.selectedAge === 'all') {
      this.setFaces(`${this.state.fetchURL}api/faces/genders/${this.state.selectedGender}`)
    } else {
      this.setFaces(`${this.state.fetchURL}api/both/${this.state.selectedGender}/${this.state.selectedAge}`)
    }
}

  setFaces(url) {
    fetch(url)
        .then(res => res.json())
        .then(res => this.setState({
            faces: res
        }))
  }

  handleGender(e) {
    this.setState({
        selectedGender: e.target.value
    })
  }

  handleAge(e) {
    this.setState({
      selectedAge: e.target.value
    })
  }

  getName() {
    fetch(this.state.nameURL)
        .then(res => res.json())
        .then(res => this.setState({
            info: res
        }))
        .then(() => this.setState({
            name: `${this.state.info[1].first} ${this.state.info[1].last}`
        }))
}

  setName(event) {
    event.preventDefault();
    this.setState({
        name: event.currentTarget.childNodes[0].value
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
      <div className={`app ${this.state.bg}`}>
          <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <div id="bgchange">
                <p>Choose your Muse</p>
                <div className="bgchoice bgc1"><button href="#" id="background1" onClick={this.changeBg}>Orchard</button></div>
                <div className="bgchoice bgc2"><button href="#" id="background2" onClick={this.changeBg}>Forest</button></div>
                <div className="bgchoice bgc3"><button href="#" id="background3" onClick={this.changeBg}>Mountains</button></div>
                <div className="bgchoice bgc4"><button href="#" id="background4" onClick={this.changeBg}>Night Sky</button></div>
                <div className="bgchoice bgc5"><button href="#" id="background5" onClick={this.changeBg}>City</button></div>
              </div>
              {wrapper}
              <a href="/"><div id="restartButton"><img id="restartImg" alt="restart button" src={images('./restart.svg')} /></div></a>
      

              <Facepage changeStepNext={this.changeStepNext} faces={this.state.faces} mainFace={this.state.mainFace} changeMainFace={this.changeMainFace} randomFace={this.randomFace} filterFaces={this.filterFaces} handleGender={this.handleGender} handleAge={this.handleAge} faceLength={this.state.faces.length} />
              <Describepage changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev} getA1={this.getA1} getA2={this.getA2} getA3={this.getA3} getA4={this.getA4} getA5={this.getA5} getA6={this.getA6} mainFace={this.state.mainFace} />
              <Namepage changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev} occupation={this.state.a2} age={this.state.a3} mainFace={this.state.mainFace} getName={this.getName} name={this.state.name} setName={this.setName} />
              <Export changeStepPrev={this.changeStepPrev} mainFace={this.state.mainFace} name={this.state.name} occupation={this.state.a2}  a1={this.state.a1} a2={this.state.a2} a3={this.state.a3} a4={this.state.a4} a5={this.state.a5} a6={this.state.a6}/>
            </Route>
            <Route path="/landing"><Intro /> </Route>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
