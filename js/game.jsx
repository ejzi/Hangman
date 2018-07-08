import React from 'react';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            letters: [],
            incorrectLetters: [],
            correct: [],
            img: "./../images/hang0.png",
            livesAmount: 6,
            won: 0,
        }
    }

    selectedLetter = e => {
        const newLetters = this.state.letters.slice();
        newLetters.push(e.target.dataset.value);

        const correctLetters = this.state.correct.slice();
        const wrongLetters = this.state.incorrectLetters.slice();

        if (this.props.selectedWord.indexOf(e.target.dataset.value) >= 0) {
            correctLetters.push(e.target.dataset.value);
        } else {
            wrongLetters.push(e.target.dataset.value)
        }
        this.setState({
            letters: newLetters,
            incorrectLetters: wrongLetters,
            correct: correctLetters,
            img: `./../images/hang${wrongLetters.length}.png`,
            livesAmount: `${6 - wrongLetters.length}`,
        },() => {
            const wordWithoutDuplicates = Array.from(new Set(this.props.selectedWord));
            if (this.state.correct.length === wordWithoutDuplicates.length) {
                this.setState({
                    won: this.state.won +1
                })
            }
        });

    };


    resetState = e => {
        this.setState({
            letters: [],
            incorrectLetters: [],
            correct: [],
            img: "./../images/hang0.png",
            livesAmount: 6,
        });
        this.props.randIndex()
    };

    render() {
        const letters = {
            EN: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            PL: ["A", "Ą", "B", "C", "ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "O", "P", "R", "S", "T", "U", "Ó", "W", "Y", "Z", "Ź", "Ż"],
        };
        const wordWithoutDuplicates = Array.from(new Set(this.props.selectedWord));
 console.log(this.props.selectedLanguage);
        let lettersList;
            if (this.props.selectedLanguage === "EN") {
                lettersList = letters.EN.map(e => {
                    return (
                        <button className="letter"
                                disabled={this.state.letters.indexOf(e) >= 0 ? true : false}
                                onClick={this.selectedLetter} data-value={e}> {e} </button>
                    )
                })
            }else if(this.props.selectedLanguage === "PL") {
                    lettersList = letters.PL.map(e => {
                        return (
                            <button className="letter"
                                    disabled={this.state.letters.indexOf(e) >= 0 ? true : false}
                                    onClick={this.selectedLetter} data-value={e}> {e} </button>
                        )
                    })
                }

        if (this.state.correct.length === wordWithoutDuplicates.length) {
            lettersList = <button onClick={this.resetState}>play again</button>
        } else if (this.state.incorrectLetters.length >= 6) {
            lettersList = <button onClick={this.resetState}>play again</button>
        }

        return (
            <div>
                <img className="image" src={this.state.img}/>

                <ul>
                    {this.props.selectedWord.map(e => {
                        if (this.state.correct.indexOf(e) >= 0) {
                            return <li> {e} </li>
                        } else if (this.state.correct.indexOf(e) < 0) {
                            return <li> _ </li>
                        }
                    })
                    }
                </ul>
                <div className="lettersList">
                    {lettersList}
                </div>
                <div>
                    {this.props.lives}{this.state.livesAmount}
                </div>
                <div>
                    {this.props.score}{this.state.won}
                </div>
            </div>
        )
    }
}

export default Game
