import React from 'react';
import './Export.css';
import domtoimage from 'dom-to-image';
const images = require.context('../images/faces', true);


class Export extends React.Component {

    downloadScreen() {
        const node = document.getElementById('node');


        domtoimage.toJpeg(node)
            .then(function(dataUrl) {
                console.log(dataUrl)

                const link = document.createElement('a');
                link.download = 'darling.jpeg'
                link.href = dataUrl;
                link.click();  
            })
            .catch(function(error) {
                console.error('oops, something went wrong', error);
            });

    }

    render() {
        return (
            <div className="export" id="export">
                <div className="exportwrapper">
                    <div className="exportcontainer" id="node">
                        
                        <div className="cardLast">
                            <h1>Save your Darling</h1>
                            <div className="cardFlex">
                                <div className="mainInfo">
                                    <div className="lgframe" id="export-pic">
                                        <img src={images(`./${this.props.mainFace}.png`)} alt="large face" />
                                    </div>
                                    <div className="basics">
                                        <h3>{this.props.name}</h3>
                                        <h3>Age {this.props.a3}</h3>
                                        <h3>Occupation: {this.props.occupation}</h3>
                                    </div>
                                </div>
                                <div className="answers">
                                    
                                        <p>1. Where was your character born?</p>
                                        <p className="a">{this.props.a1}</p>
                                        <p>2. What is your character's occupation?</p>
                                        <p className="a">{this.props.a2}</p>
                                        <p>3. How old is your character?</p>
                                        <p className="a">{this.props.a3}</p>
                                    
                                    
                                        <p>4. What makes your character laugh out loud?</p>
                                        <p className="a">{this.props.a4}</p>
                                        <p>5. It’s Saturday at noon. What is your character doing?</p>
                                        <p className="a">{this.props.a5}</p>
                                        <p>6. What is their biggest fear?</p>
                                        <p className="a">{this.props.a6}</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <a href="#namepage"><button className="prev" onClick={this.props.changeStepPrev}>Previous</button></a>   
                            <button className="saveButton" onClick={this.downloadScreen}>Save my Darling</button> 
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Export;