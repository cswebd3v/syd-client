import React from 'react';
import './Namepage.css';
const images = require.context('../images/faces', true);


class Namepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' ',
            url: 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole',
            info: [],
        }
    }



    render() {
        console.log(this.props.occupation)
        return (
            <div className="namepage" id="namepage">
                <div className="namewrapper">
                    <div className="namecontainer">

                        <div className="dpanel namedpanel">
                                <div className="card">
                                    <div className="lgframe">
                                         <img src={images(`./${this.props.mainFace}.png`)} alt="large face" />
                                    </div>
                                    <h3>{this.props.name}</h3>
                                    <h3>{this.props.occupation}</h3>
                                    <h3>Age {this.props.age}</h3>
                                </div>
                                <div className="buttonPanel hiddenmobile">
                                    <a href="#describepage"><button className="prev" onClick={this.props.changeStepPrev}>Previous</button></a> 
                                    <a href="#export"><button className="next" onClick={this.props.changeStepNext}>Next</button></a>   
                                </div>
                        </div>

                        <div className="nameMain">
                            <h1>Name your Darling</h1>
                            <div className="name-form">
                                <form onSubmit={this.props.setName}>
                                    <input placeholder="Firstname Lastname" type="text" name="fullname" id="fullname" />
                                    <button type="submit">Confirm</button>
                                </form>
                                <h3>OR</h3>
                                <button onClick={this.props.getName}>Generate Random Name</button>
                                <h3>Your Darling's name is: {this.props.name}</h3>
                            </div>
                        </div>
                        <div className="buttonPanel hiddenmain">
                                    <a href="#describepage"><button className="prev" onClick={this.props.changeStepPrev}>Previous</button></a> 
                                    <a href="#export"><button className="next" onClick={this.props.changeStepNext}>Next</button></a>   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Namepage;