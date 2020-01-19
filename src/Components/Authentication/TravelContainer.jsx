import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import Login from "./Login";
import SearchBar from "./SearchBar";
import Explore from "./Explore";

function TravelContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu} isAuthenticated ={props.isAuthenticated} getMenuState = {props.getMenuState}/>
      <SearchBar/>
      <Slider/>
      <Explore/>
	</div>);
}

export default TravelContainer;