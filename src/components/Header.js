import React from 'react';

import { ReactComponent as Smile } from '../smile.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <header className="header">
                <span className="container-smile">
                    <div className="smile">
                        <Smile />
                    </div>
                </span>
                <span className="container-title">
                    <div className="title">
                        {this.props.storyTitle}
                    </div>
                </span>
            </header>
        )
    }
}

export default Header;