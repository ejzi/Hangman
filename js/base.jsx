import React from 'react';
import Level from "./level.jsx";
import Category from "./category.jsx";
import Game from "./game.jsx";

class Base extends React.Component {
    render() {
        return (
            <div>
                <Level changeLevel={this.props.changeLevel}
                       level={this.props.level}
                       levelEasy={this.props.levelEasy}
                       levelMedium={this.props.levelMedium}
                       levelHard={this.props.levelHard}/>
                <Category changeCategory={this.props.changeCategory}
                          category={this.props.category}
                          categoryAnimals={this.props.categoryAnimals}
                          categoryMovies={this.props.categoryMovies}
                          categoryCities={this.props.categoryCities} />
                <Game lives={this.props.lives}
                      score={this.props.score}
                      selectedWord={this.props.selectedWord}
                      selectedLanguage={this.props.selectedLanguage}
                      randIndex={this.props.randIndex}/>
            </div>
        )
    }
}

export default Base