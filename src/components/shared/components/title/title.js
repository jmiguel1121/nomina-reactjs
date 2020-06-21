import React, { Component } from 'react';
import './title.css';

class Title extends Component {
    render() {
        return (
            <div>
                <h3 className="title-content">{this.props.title}</h3>
            </div>
        );
    }
}

export default Title;
