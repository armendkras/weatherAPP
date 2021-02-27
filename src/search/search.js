import React from 'react';
import './search.css';

const Search = (props) => {
     
     


    return( <div className="search-box">
        
    <input 
    type="text" 
    className="search-bar"
    placeholder="Search.."
    onChange={props.onchange}
    value={props.query}
    onKeyPress={props.onkeypress }
    />
  </div>)
}

export default Search;