import React from "react";



function SearchBar(props) {
  return( 
    <div class = "search-bar">

    <input class = "search-input" type="text" name="search" placeholder = "Enter by Destination, Attraction, or Activity"/>
        <button class = "search-btn">	
            <a class = "search-link" href="#">
                <i class="fas fa-search"></i>
            </a>
        </button>
`   </div>);
}

export default SearchBar;