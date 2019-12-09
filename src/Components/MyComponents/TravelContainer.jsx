import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import Login from "./Login";

function TravelContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu} isAuthenticated ={props.isAuthenticated} getMenuState = {props.getMenuState}/>
      <Slider/>
	</div>);
}

export default TravelContainer;