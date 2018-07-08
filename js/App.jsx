import React from 'react';
import Header from './header.jsx';
import Base from './base.jsx';
import Footer from './footer.jsx';

const pl_PL = {
    hello: "Cześć!",
    subtitle: "Zagraj w wisielca!",
    rules: "Zasady gry",
    howToPlay: "Wybież kategorię i poziom trudności. Spróbuj zgadnąć hasło zanim stracisz wszystkie szanse.",
    level: "Poziom",
    levelEasy: "Łatwy",
    levelMedium: "Średni",
    levelHard: "Trudny",
    category: "Kategoria",
    categoryAnimals: "Zwierzęta",
    categoryMovies: "Filmy",
    categoryCities: "Miasta",
    lives: "Pozostałe szanse: ",
    score: "Wygrane: ",
}

const en_EN = {
    hello: "Hello",
    subtitle: "Lets play hangman!",
    rules: "How to play",
    howToPlay: "Choose the category and game level. Try to guess the word before you run out of chances",
    level: "Level",
    levelEasy: "Easy",
    levelMedium: "Medium",
    levelHard: "Hard",
    category: "Category",
    categoryAnimals: "Animals",
    categoryMovies: "Movies",
    categoryCities: "Cities",
    lives: "Chances left: ",
    score: "Won: ",
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "PL",
            level: "easy",
            category: "animals",
            index: -1,
            addClass: false,
        }
    }

    changeLanguage = e => {
        this.setState({
            language: e.target.dataset.value,
            addClass: true,
        })
    };

    changeLevel = e => {
        this.setState({
            level: e.target.dataset.value,
            addClass: true,
        })
    };

    changeCategory = e => {
        this.setState({
            category: e.target.dataset.value,
            addClass: true,
        })
    };

    randIndex = () => {
        this.setState({
            index: Math.floor(Math.random() * ((this.wordsList.length - 1) + 1)),
        })
    };

    componentDidMount(){
        this.randIndex()
    }


    render() {

        const words = {
            PL: {
                easy: {
                    animals: ["LEW", "ZEBRA", "KROWA"],
                    cities: ["TOKIO", "GIZA"],
                },
                medium: {
                    animals: ["TYGRYS", "HIPOPOTAM", "ORANGUTAN"],
                    cities: ["NEAPOL", "MEDIOLAN"],
                },
                hard: {
                    animals: ["TYRANOZAUR", "GRONOSTAJ", "JEŻOZWIERZ"],
                    cities: ["WASZYNGTON", "HAJDARABAD"],
                },
            },
            EN: {
                easy: {
                    animals: ["SWAN", "ELK", "LAMB"],
                    cities: ["BARI", "MANTA"],
                },
                medium: {
                    animals: ["HEDGEHOG", "ELEPHANT", "MANATEE"],
                    cities: ["BERLIN", "MARSEILLE"],
                },
                hard: {
                    animals: ["CHINCHILLA", "ChIMPANZEE", "HIPPOPOTAMUS"],
                    cities: ["BRATISLAVA", "AIZUWAKAMATSU"],
                }
            }
        }

        console.log(this.state.language);

        console.log(this.state.level);
        console.log(this.state.category);
        console.log(words[this.state.language][this.state.level][this.state.category]);
        this.wordsList = words[this.state.language][this.state.level][this.state.category];

        if(this.state.index === -1){
            return null
        }

        let word = [...this.wordsList[this.state.index]];
        console.log(word);


        let selectedLanguage;
        if (this.state.language === "PL") {
            selectedLanguage = pl_PL;

        } else {
            selectedLanguage = en_EN;
        }

        const buttonsClass = ["highlight"]

        return (
            <div className="mainContainer">
                <Header changeLanguage={this.changeLanguage}
                        title={selectedLanguage.hello}
                        subtitle={selectedLanguage.subtitle}
                        rules={selectedLanguage.rules}
                        howToPlay={selectedLanguage.howToPlay}/>
                <Base changeLevel={this.changeLevel}
                      level={selectedLanguage.level}
                      levelEasy={selectedLanguage.levelEasy}
                      levelMedium={selectedLanguage.levelMedium}
                      levelHard={selectedLanguage.levelHard}
                      changeCategory={this.changeCategory}
                      category={selectedLanguage.category}
                      categoryAnimals={selectedLanguage.categoryAnimals}
                      categoryMovies={selectedLanguage.categoryMovies}
                      categoryCities={selectedLanguage.categoryCities}
                      lives={selectedLanguage.lives}
                      score={selectedLanguage.score}
                      selectedWord={word}
                      selectedLanguage={this.state.language}
                      randIndex={this.randIndex}/>
                <Footer/>
            </div>
        )
    }
}

export default App