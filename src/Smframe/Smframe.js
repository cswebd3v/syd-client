import React from 'react';
import './Smframe.css';
import images from '../imageStore.js';
//const images = require.context('../images/faces', true);

class Smframe extends React.Component {


    render() {
        return (
            <div className="smframe">
                    <div className="smframe" id={this.props.faceid} onClick={this.props.changeMainFace}><img src={images[this.props.faceid - 1]} alt="small face icon" /></div>
            </div>
        );
    }
}

export default Smframe;