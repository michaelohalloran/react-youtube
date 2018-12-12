import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    state = {term: ''}

    onFormSubmit = e => {
        const {onSearchSubmit} = this.props;

        e.preventDefault();
        //pass data upstream
        console.log('hit submit');
        onSearchSubmit(this.state.term);
        this.setState({term: ''});
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>Video Search</label>
                        <input 
                            type="text"
                            name="term"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
