import React from 'react';

export default class ResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="reset-button" onClick={this.props.stepReset}>
                <i className="fas fa-undo"></i>
            </div>
        )
    }
}