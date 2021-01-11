import React, { useState } from "react";

const Search = (props) => {
  const initialState = {
    search: "",
  };

  const [value, setValue] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="search">
      <form className="search-form">
        <input
          className="search-bar"
          name="search"
          value={value.search}
          onChange={handleChange}
          placeholder="Search Restaurants"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
