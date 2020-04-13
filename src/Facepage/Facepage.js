import React from 'react';
import './Facepage.css';
import Smframe from '../Smframe/Smframe.js';
const images = require.context('../images/faces', true);

class Facepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: ' ',
            gender: ' ',
            numShown: 25,
            page: 0,
            selectedGender: ' ',
        }
        this.nextFacePage = this.nextFacePage.bind(this);
        this.prevFacePage = this.prevFacePage.bind(this);
        
    }
    componendDidMount() {
        console.log(this.props)
    }


    nextFacePage() {
        this.setState(prevState => {

            return {page: prevState.page + 1}
          });
    }

    prevFacePage() {
        this.setState(prevState => {

            return {page: prevState.page - 1}
          });
    }






    render() {
        const ageList = [
            {
                id: 1,
                title: 'all'
            },
            {
                id: 2,
                title: 'young'
            },
            {
                id: 3,
                title: 'middle'
            },
            {
                id: 4,
                title: 'old'
            }
        ];
        const genderList = [
            {
                id: 1,
                title: 'all'
            },
            {
                id: 2,
                title: 'female'
            },
            {
                id: 3,
                title: 'male'
            }
        ];

        const start = this.state.page * this.state.numShown;
        const end = start + this.state.numShown;
        const faces = this.props.faces.slice(start, end);

        let buttons;
            if (this.state.page === 0 && this.props.faceLength > 25) {
                buttons = (
                    <div>
                        <button onClick={this.nextFacePage}>Show New Faces</button>
                    </div>
                )
            } else if (this.state.page === 3) {
                buttons = (
                    <div>
                        <button onClick={this.prevFacePage}>Previous Page</button>
                    </div>
                ) 
            } else if (this.state.page === 0 && this.props.faceLength <= 25) {
                buttons = (
                <div></div>
                )
            } else {
                buttons = (
                    <div>
                        <button onClick={this.prevFacePage}>Previous</button>
                        <button onClick={this.nextFacePage}>Next</button>
                    </div>
                )
            }
        return (
            <div className="facepage" id="facepage">
                <div className="facewrapper">
                    <div className="facecontainer">
                        
                        <div className="dpanel facepanel">
                            <div className="card">
                                <div className="lgframe">
                                    <img src={images(`./${this.props.mainFace}.png`)} alt="large face" />
                                </div>
                                <button onClick={this.props.randomFace} id="randomButton">Random Face</button>
                            </div>
                            <div className="buttonPanel">
                                <a href="#describepage"><button className="next hiddenmobile" onClick={this.props.changeStepNext}>Next Step</button></a>     
                            </div>
                        </div>

                        <div className="chooseface">
                            <div className="flexdrops">
                                <h1>Click to choose a face!</h1>
                                <div className="dropline">
                                    <form>
                                        <label htmlFor='gender'>Filter by gender: </label>
                                        <select id='gender' name='gender' onChange={e => this.props.handleGender(e)}>
                                            {genderList.map((gender, i) => (
                                                <option key={i} value={gender.title}>{gender.title}</option>
                                            ))}
                                        </select>
                                    </form>

                                    <form>
                                        <label htmlFor='age'>Filter by age: </label>
                                        <select id='age' name='age' onChange={e => this.props.handleAge(e)}>
                                            {ageList.map((age, i) => (
                                                <option key={i} value={age.title}>{age.title}</option>
                                            ))}
                                        </select>
                                    </form>
                                </div>
                                <button className="filterButton" onClick={this.props.filterFaces}>Filter Results</button> {buttons}

                            </div>
                            <div className="flexframes">
                                {faces.map((face, i) => (
                                    <span key={i}>
                                        <Smframe changeMainFace={this.props.changeMainFace} faceid={face.id} />
                                    </span>
                                ))}
                                
                                <div>
                                    <a href="#describepage"><button className="next hiddenmain" id="facenext" onClick={this.props.changeStepNext}>Next Step</button></a>  
                                </div>
                            </div>
                            
                            
                            

                        </div>
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default Facepage;