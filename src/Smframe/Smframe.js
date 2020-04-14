import React from 'react';
import './Smframe.css';
const images = require.context('../images/faces', true);

class Smframe extends React.Component {


    render() {
        return (
            <div className="smframe">
                    <div className="smframe" id={this.props.faceid} onClick={this.props.changeMainFace}><img src={images(`./${this.props.faceid}.png`)} alt="small face icon" /></div>
            </div>
        );
    }
}

export default Smframe;