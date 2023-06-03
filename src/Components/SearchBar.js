import React from "react";
import './SearchBar.css'

const SearchBar = ( {searchfield, searchChange } ) => {
    return (
        <div className='searchBarDiv'>
            <input 
            type='search'
            className='searchBar'
            placeholder='Enter name'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBar;