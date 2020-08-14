import React from 'react';

const Search = ({searchfield, searchChange}) => {
  return(
    <div>
      <input type='search'
        placeholder='Search Customer by Name'
        onChange={searchChange}
      />
    </div>
  )
}

export default Search;