import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import Explore from "./Explore";
import Welcome from "./Welcome";

function TravelContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu} isAuthenticated ={props.isAuthenticated} getMenuState = {props.getMenuState}/>
      <Slider/>
      <Welcome/>
      <Explore/>
	</div>);
}

export default TravelContainer;