import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";



function Welcome(props) {
  return( 
    <div id = "welcome-section">
    <div class = "welcome-message">
        Make the world your playground
    </div>
    <SearchBar/>
</div> );
}

export default Welcome;