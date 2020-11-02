import React, { useState } from "react";
// refactoring the SearchBar. Functional components.
const SearchBar = () => {
 const [term, setTerm] = useState('');
}

export class SearchBar extends React.Component {

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log('from searchbar:', this.state.term);
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui purple segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field ">
            <label>
              <h3> Search for Youtube videos </h3>
            </label>
            <div className="ui pointing below label purple">Please enter something to search for on YouTube and hit Enter:</div>
            <div className="ui action left icon input">
              <i className="search icon"></i>
              <input
                type="text"
                placeholder="Cuddly Cows"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
