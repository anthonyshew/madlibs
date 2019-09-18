import React from 'react';

import storyOptions from '../utils/stories.json';

export default class StorySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleStorySelect = (e) => {
        this.props.storySelect(e.target.innerHTML)
    }

    render() {
        return (
            <div className="container-step container-story-select">
                <h2 className="header">Select Your Story</h2>
                <div className="container-selector">
                    <div className="story-selector">
                        {Object.keys(storyOptions).map((storyKey, index) => {
                            return <div className="option" key={index} onClick={this.handleStorySelect}>{storyKey}</div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}