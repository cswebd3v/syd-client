import React from 'react';
import './Intro.css';

const images = require.context('../images/', true);

class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <div className="introcontainer">
                    <h1>Save Your Darlings</h1>
                    <p>The term "kill your darlings" is used by writers to describe the painful decision to cut out or "kill" certain characters or scenes from their work. 
                        This is often done against the writer's gut instincts, but in order to improve the quality of the overall work. There will be no killing here, however.</p>
                    <p>One of the most difficult tasks for a writer is to distinctly visualize their characters' faces. As humans, we often don't have the brain power or patience
                        to do so. Save Your Darlings is an app that aims to help writers along the road to this impossible task, as well as providing a place for brainstorming
                        different character ideas.
                    </p>
                    <p>The app walks the user through 4 steps. First the user will choose a face to work off of. Then, the user will describe the character that they have in mind.
                        Next, the writer will name their character using a new name or choosing one at random using the name generator. Lastly, the user can SAVE THEIR DARLING, 
                        which will download a character card to their computer.
                    </p>
                    <p>Who knows, maybe you'll just make the next 'Hooked Nosed' potions master.</p>
                    <img src={images('./intro.jpg')} alt='screen preview' />
                </div>
            </div>
        );
    }
}

export default Intro