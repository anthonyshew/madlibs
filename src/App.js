import React from 'react';
import './styles/App.scss';

import { CSSTransition } from 'react-transition-group';

import StorySelect from './components/StorySelect';
import Blanks from './components/Blanks';
import FullStory from './components/FullStory';

import storyOptions from './utils/stories.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      blanksArray: [],
      storyTitle: "",
      story: ""
    }
  }

  storySelect = (selectedStory) => {
    this.setState({
      step: this.state.step + 1,
      blanksArray: storyOptions[selectedStory].blanks,
      storyTitle: selectedStory,
      story: storyOptions[selectedStory].story
    })
  }

  fillBlanks = (filledBlanksArray) => {
    let newBlanksArray = [...this.state.blanksArray]
    newBlanksArray.map((elem, index) => {
      return newBlanksArray[index][1] = filledBlanksArray[index]
    })
    this.setState({
      step: this.state.step + 1,
      blanksArray: newBlanksArray
    })
  }

  render() {

    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={600}
        classNames="fadeIn"
      >
        <div className="App">
          {this.state.step === 1 &&
            <StorySelect step={this.state.step}
              storySelect={this.storySelect} />}
          {this.state.step === 2 &&
            <Blanks storyTitle={this.state.storyTitle}
              blanksArray={this.state.blanksArray}
              fillBlanks={this.fillBlanks} />}
          {this.state.step === 3 &&
            <FullStory storyTitle={this.state.storyTitle}
              story={this.state.story}
              filledBlanks={this.state.blanksArray} />}
        </div>
      </CSSTransition>
    );
  }
}
