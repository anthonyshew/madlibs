import React from 'react';

import CompletedBlanks from './CompletedBlanks';
import Header from './Header';

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
                <Header storyTitle={this.props.storyTitle} />
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