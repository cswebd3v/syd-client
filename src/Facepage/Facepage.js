import React from 'react';
import './Facepage.css';
import Smframe from '../Smframe/Smframe.js';
import Dpanel from '../Dpanel/Dpanel.js';

class Facepage extends React.Component {
    componendDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="facepage" id="facepage">
                <div className="facewrapper">
                    <div className="facecontainer">
                        
                        
                            
                        <Dpanel changeStepNext={this.props.changeStepNext}/>
                        


                        <div className="chooseface">
                            <div className="flexdrops">
                            </div>
                            <div className="flexframes">
                                <Smframe />
                                <Smframe />
                                <Smframe />
                                <Smframe />
                            </div>

                        </div>
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default Facepage;