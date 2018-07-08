import React from 'react';
import Language from "./language.jsx";

class Header extends React.Component {
    render() {
        return (
            <div>
                <Language changeLanguage={this.props.changeLanguage}/>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <h3>{this.props.rules}</h3>
                <p>{this.props.howToPlay}</p>
            </div>
        )
    }
}

export default Header