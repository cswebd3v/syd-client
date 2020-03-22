import React from 'react';
import './Namepage.css';
import Dpanel from '../Dpanel/Dpanel.js';

class Namepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' ',
            url: 'https://uinames.com/api/',
            info: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getName = this.getName.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            name: event.currentTarget.childNodes[0].value
        });
        console.log(event.currentTarget);
    }

    getName() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(res => this.setState({
                info: res
            }))
            .then(() => this.setState({
                name: `${this.state.info.name} ${this.state.info.surname}`
            }))
    }

    render() {
        console.log(this.state.info.name, this.state.info.surname);
        return (
            <div className="namepage" id="namepage">
                <div className="namewrapper">
                    <div className="namecontainer">

                        <Dpanel />

                        <h1>Name your Darling</h1>
                        <div className="name-form">
                            <form onSubmit={this.handleSubmit}>
                                <input placeholder="Firstname Lastname" type="text" name="fullname" id="fullname" />
                                <button type="submit">Confirm</button>
                            </form>
                            <h3>OR</h3>
                            <button onClick={this.getName}>Generate Random Name</button>
                            <h3>Your Darling's name is: {this.state.name}</h3>
                        </div>
                        <a href="#describepage"><button onClick={this.props.changeStepPrev}>Previous</button></a> 
                        <a href="#export"><button onClick={this.props.changeStepNext}>Next</button></a> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Namepage;