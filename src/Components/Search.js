import React from 'react'

const Search = props => {

  const localHandleSearchChange = (e) => {
    props.handleSearchChange(e.target.value)
  }

    return (
      <div className="ui search">
        <div className="ui icon input">
          <input value={props.searchTerm} onChange={localHandleSearchChange} className="prompt" placeholder="Search Restaurants"/>
          <i className="search icon" />
        </div>
      </div>
    )
}

export default Search

 
