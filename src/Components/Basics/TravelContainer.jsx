import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import Welcome from "./Welcome";

function TravelContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu} isAuthenticated ={props.isAuthenticated} getMenuState = {props.getMenuState}/>
      <Slider/>
      <Welcome/>
	</div>);
}

export default TravelContainer;