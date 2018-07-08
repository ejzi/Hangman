import React from 'react';

class Language extends React.Component {
    render() {
        return (
                <div className="language">
                    <button className="pl" onClick={this.props.changeLanguage} data-value="PL">PL</button>
                    <button className="en" onClick={this.props.changeLanguage} data-value="EN">EN</button>
                </div>
        )
    }
}

export default Language