import React from 'react';
import './Describepage.css';
const images = require.context('../images/faces', true);


class Describepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a1: ' ',
            a2: ' ',
            a3: ' ',
            a4: ' ',
            a5: ' ',
            a6: ' '
        }
    }

    render() {
        return (
            <div className="describepage" id="describepage">
                <div className="describewrapper">
                    <div className="describecontainer">

                        <div className="dpanel">
                            <div className="card">
                                <div className="lgframe">
                                     <img src={images(`./${this.props.mainFace}.png`)} alt="large face"/>
                                </div>
                            </div>
                            <div className="buttonPanel hiddenmobile">
                                <a href="#facepage"><button className="prev" onClick={this.props.changeStepPrev}>Previous</button></a> 
                                <a href="#namepage" onClick={this.props.changeStepNext}><button className="next">Next</button></a>     
                            </div>
                        </div>

                        
                        <div className="charSheetWrapper">
                            <div className="charSheet">
                            <h1>Describe your Darling</h1>
                                <form>
                                    <div>
                                        <label htmlFor="q1">1. Where was your character born?</label><br></br>
                                        <input type="text" name="a1" id="a1" onChange={this.props.getA1}/>
                                    </div><br></br>

                                    <div>
                                        <label htmlFor="q2">2. What is your character's occupation?</label><br></br>
                                        <input type="text" name="a2" id="a2" onChange={this.props.getA2}/>
                                    </div><br></br>

                                    <div>
                                        <label htmlFor="q3">3. How old is your character?</label><br></br>
                                        <input type="number" name="a3" id="a3" onChange={this.props.getA3}/>
                                    </div><br></br>

                                    <div>
                                        <label htmlFor="q4">4. What makes your character laugh out loud?</label><br></br>
                                        <input type="text" name="a4" id="a4" onChange={this.props.getA4}/>
                                    </div><br></br>

                                    <div>
                                        <label htmlFor="q5">5. It’s Saturday at noon. What is your character doing?</label><br></br>
                                        <input type="text" name="a5" id="a5" onChange={this.props.getA5}/>
                                    </div><br></br>

                                    <div>
                                        <label htmlFor="q6">6. What is their biggest fear?</label><br></br>
                                        <input type="text" name="a6" id="a6" onChange={this.props.getA6}/>
                                    </div><br></br>
                                    
                                </form>
                            </div>
                            <div className="buttonPanel buttonPanDesc hiddenmain">
                                <a href="#facepage"><button className="prev" onClick={this.props.changeStepPrev}>Previous</button></a> 
                                <a href="#namepage" onClick={this.props.changeStepNext}><button className="next">Next</button></a>     
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Describepage;