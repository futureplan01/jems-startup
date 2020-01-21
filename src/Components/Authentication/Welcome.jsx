import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";



function Welcome(props) {
  return( 
    <div id = "welcome-section">
    <div className = "welcome-message">
        Make the world your playground
    </div>
    <div className = "search-bar"> 
        <Link to ="/Countries">Lets Get Started </Link>
    </div>
</div> );
}

export default Welcome;