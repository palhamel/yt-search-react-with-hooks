import React, { useState } from "react";

// refactoring the SearchBar. Functional components.

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui purple segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field ">
          <label>
            <h3> Search for Youtube videos </h3>
          </label>
          <div className="ui pointing below label purple">
            Please enter something to search for on YouTube and hit Enter:
          </div>
          <div className="ui action left icon input">
            <i className="search icon"></i>
            <input
              type="text"
              placeholder="Cuddly Cows"
              value={term}
              onChange={onInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

//-----------

export class SearchBar extends React.Component {
  render() {}
}
