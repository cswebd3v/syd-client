import React from 'react';
import './Export.css';
import Dpanel from '../Dpanel/Dpanel.js';

class Export extends React.Component {
    render() {
        return (
            <div className="export" id="export">
                <div className="exportwrapper">
                    <div className="exportcontainer">

                        <Dpanel />

                        <h1>Save your Darling</h1>
                        <a href="#namepage"><button onClick={this.props.changeStepPrev}>Previous</button></a> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Export;