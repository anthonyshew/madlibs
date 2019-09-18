import React from 'react';

import CompletedBlanks from './CompletedBlanks';

export default class FullStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        let { story, filledBlanks } = this.props
        let storyArray = story.split("???")

        return (
            <div className="container-step container-full-story">
                <header className="header">
                    <span className="container-smile">
                        <div className="smile">
                            :)
                        </div>
                    </span>
                    <span className="container-title">
                        <div className="title">
                            {this.props.storyTitle}
                        </div>
                    </span>
                </header>
                <div className="container-story">
                    <div className="story">
                        {storyArray.map((string, index) => {
                            let completedBlanksComponent
                            if (index < filledBlanks.length) {
                                completedBlanksComponent = <CompletedBlanks
                                    userAnswer={filledBlanks[index][1]}
                                    partOfSpeech={filledBlanks[index][0]} />
                            } else { completedBlanksComponent = null }
                            return [<span>{string}</span>,
                                completedBlanksComponent]
                        })}
                    </div>
                </div>
            </div>
        )
    }
}