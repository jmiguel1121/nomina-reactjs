import React, { Component } from 'react';
import Menu from '../../components/shared/components/menu/menu';
import Generate from '../generate/generate';


class Home extends Component {

    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    <Generate />
                </div>
            </div>
        );
    }
}

export default Home;
