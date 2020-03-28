import React from 'react';
import './Facepage.css';
import Smframe from '../Smframe/Smframe.js';

class Facepage extends React.Component {
    componendDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="facepage" id="facepage">
                <div className="facewrapper">
                    <div className="facecontainer">
                        
                        <div className="dpanel">
                            <div className="card">
                                <div className="lgframe"></div>
                                <button>Random Face</button>
                            </div>
                            <div className="buttonPanel">
                                <a href="#describepage"><button onClick={this.props.changeStepNext}>Next</button></a>     
                            </div>
                        </div>

                        <div className="chooseface">
                            <div className="flexdrops">
                            </div>
                            <div className="flexframes">
                                <Smframe />
                                <Smframe />
                                <Smframe />
                                <Smframe />
                            </div>

                        </div>
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default Facepage;