import React from 'react';
import './Export.css';

class Export extends React.Component {
    render() {
        return (
            <div className="export" id="export">
                <div className="exportwrapper">
                    <div className="exportcontainer">
                        <h1>Save your Darling</h1>
                        <div className="card">
                            <div className="lgframe"></div>
                            <a href="#namepage"><button onClick={this.props.changeStepPrev}>Previous</button></a>   
                        </div> 
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Export;