import React from 'react';

export default class CompletedBlanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <span className="completed-blank">
                <span className="user-answer">{this.props.userAnswer}</span>
                <span className="part-of-speech">{this.props.partOfSpeech}</span>
            </span>
        )
    }
}