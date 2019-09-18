import React from 'react';

export default class Blanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInputs: [],
            error: ""
        };
    }

    componentDidMount = () => {
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
        } else { return this.props.fillBlanks(this.state.userInputs) }
    }

    render() {
        return (
            <div className="container-step container-blanks">
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
                <div className="blanks-list">
                    {this.props.blanksArray.map((blank, index) => {
                        return <div className="blank">
                            <input id={index} className="user-input" onChange={this.onChange} placeholder={blank[0]} autoComplete="off"></input>
                        </div>
                    })}
                </div>
                <button className="button-blanks" onClick={this.handleBlankSubmissions}>{this.state.error || "Fill it in!"}</button>
            </div>
        )
    }
}