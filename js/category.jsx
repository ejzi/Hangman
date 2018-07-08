import React from 'react';


class Category extends React.Component {
    render() {
        return (
            <div className="category">
                <div>{this.props.category}</div>
                <button onClick={this.props.changeCategory} data-value="animals">{this.props.categoryAnimals}</button>
                {/*<button>{this.props.categoryMovies}</button>*/}
                <button onClick={this.props.changeCategory} data-value="cities">{this.props.categoryCities}</button>
            </div>
        )
    }
}

export default Category