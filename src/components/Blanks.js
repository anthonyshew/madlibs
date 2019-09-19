import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Header from './Header';

export default class Blanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appear: true,
            enterTimeout: 500, //Animation timing must also be changed in animations.scss!
            exitTimeout: 500, //Animation timing must also be changed in animations.scss!
            userInputs: [],
            error: ""
        };
    }

    componentWillMount = () => {
        this.setState({ userInputs: Array.from(" ".repeat(this.props.blanksArray.length)) })
    }

    onChange = (e) => {
        let newUserInputs = [...this.state.userInputs]
        let index = e.target.id
        newUserInputs[index] = e.target.value
        this.setState({ userInputs: newUserInputs })
    }

    handleBlankSubmissions = () => {
        if (this.state.userInputs.some(elem => elem === " ")) {
            return this.setState({ error: "Still some blanks...Try again!" }, () => {
                setTimeout(() => {
                    this.setState({ error: "" })
                }, 3000)
            })
        } else {
            return [
                this.setState({
                    appear: false
                }),
                setTimeout(() => {
                    this.props.fillBlanks(this.state.userInputs)
                }, this.state.exitTimeout)
            ]
        }
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
                <div className="container-step container-blanks">
                    <Header storyTitle={this.props.storyTitle} />
                    <div className="blanks-list">
                        {this.props.blanksArray.map((blank, index) => {
                            return <div className="blank">
                                <input id={index} className="user-input" onChange={this.onChange} placeholder={blank[0]} autoComplete="off"></input>
                            </div>
                        })}
                    </div>
                    <button className="button-blanks" onClick={this.handleBlankSubmissions}>{this.state.error || "Fill it in!"}</button>
                </div>
            </CSSTransition>
        )
    }
}