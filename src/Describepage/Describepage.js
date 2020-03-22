import React from 'react';
import './Describepage.css';
import Dpanel from '../Dpanel/Dpanel.js';

class Describepage extends React.Component {
    render() {
        return (
            <div className="describepage" id="describepage">
                <div className="describewrapper">
                    <div className="describecontainer">

                        <Dpanel />

                        <h1>Describe your Darling</h1>
                        <div className="charSheet">
                            <form>
                                <div>
                                    <label htmlFor="q1">1. Where was your character born?</label><br></br>
                                    <input type="text" name="a1" id="a1" />
                                </div><br></br>

                                <div>
                                    <label htmlFor="q2">2. What is your character's occupation?</label><br></br>
                                    <input type="text" name="a2" id="a2" />
                                </div><br></br>

                                <div>
                                    <label htmlFor="q3">3. How old is your character?</label><br></br>
                                    <input type="number" name="a3" id="a3" />
                                </div><br></br>

                                <div>
                                    <label htmlFor="q4">4. What makes your character laugh out loud?</label><br></br>
                                    <input type="text" name="a4" id="a4" />
                                </div><br></br>

                                <div>
                                    <label htmlFor="q5">5. It’s Saturday at noon. What is your character doing?</label><br></br>
                                    <input type="text" name="a5" id="a5" />
                                </div><br></br>

                                <div>
                                    <label htmlFor="q6">6. What is their biggest fear?</label><br></br>
                                    <input type="text" name="a6" id="a6" />
                                </div><br></br>
                                <button type="submit">Submit Answers</button>
                            </form>
                        </div>
                        <a href="#facepage"><button onClick={this.props.changeStepPrev}>Previous</button></a> 
                        <a href="#namepage" onClick={this.props.changeStepNext}><button>Next</button></a> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Describepage;