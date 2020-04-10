import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 'All',
            age: 'All'
        }
    }
    render() {
        return (
            <div className="dropdown">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="gender">Sort by gender:</label>
                    <select id='gender' name='gender'>
                        gender
                    </select>
                </form>
            </div>
        );
    }
}

export default Dropdown;