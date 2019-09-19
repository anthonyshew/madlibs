import React from 'react';
import { CSSTransition } from 'react-transition-group';

import storyOptions from '../stories.json';

export default class StorySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appear: true,
            enterTimeout: 500, //Animation timing must also be changed in animations.scss!
            exitTimeout: 500 //Animation timing must also be changed in animations.scss!
        };
    }

    handleStorySelect = (e) => {
        let selectedStory = e.target.innerHTML
        this.setState({
            appear: false
        })

        setTimeout(() => {
            this.props.storySelect(selectedStory)
        }, this.state.exitTimeout)

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
                <div className="container-step container-story-select">
                    <h2 className="header">Choose Your Story</h2>
                    <div className="container-selector">
                        <div className="story-selector">
                            {Object.keys(storyOptions).map((storyKey, index) => {
                                return <div className="option" key={index} onClick={this.handleStorySelect}>{storyKey}</div>
                            })}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}