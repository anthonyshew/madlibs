import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default class CompletedBlanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appear: true,
            enterTimeout: 500, //Animation timing must also be changed in animations.scss!
            exitTimeout: 500 //Animation timing must also be changed in animations.scss!
        };
    }

    render() {
        return (
            <CSSTransition
                in={this.state.appear}
                appear={true}
                exit={true}
                timeout={{
                    enter: this.state.enterTimeout,
                    exit: this.state.exitTimeout
                }}
                classNames="fade"
            >
                <span className="completed-blank">
                    <span className="user-answer">{this.props.userAnswer}</span>
                    <span className="part-of-speech">{this.props.partOfSpeech}</span>
                </span>
            </CSSTransition>
        )
    }
}