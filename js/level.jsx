import React from 'react';

class Level extends React.Component {
    render() {
        return (
                <div className="level">
                    <div>{this.props.level}</div>
                    <button onClick={this.props.changeLevel} data-value="easy">{this.props.levelEasy}</button>
                    <button onClick={this.props.changeLevel} data-value="medium">{this.props.levelMedium}</button>
                    <button onClick={this.props.changeLevel} data-value="hard">{this.props.levelHard}</button>
                </div>
        )
    }
}

export default Level