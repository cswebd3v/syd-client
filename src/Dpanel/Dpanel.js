import React from 'react';
import './Dpanel.css';

class Dpanel extends React.Component {
    render() {
        return (
            <div className="dpanel">
                <div className="lgframe"></div>
                <button>Random Face</button><br></br><br></br>
                <button>Choose this face!</button><br></br><br></br>
                <a href="#describepage"><button onClick={this.props.changeStepNext}>Next</button></a>                            
            </div>
        );
    }
}

export default Dpanel;