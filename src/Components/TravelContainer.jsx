import React from "react";

import NavBar from "./Authentication/NavBar";
import Slider from "./Authentication/Slider";
import Login from "./Login";

function TravelContainer(props) {
    return( 
    <div  className = "container">
    <header>
        <div className = "nav-icon menu-icon-left">
            <i className="fas fa-bars fa-lg"></i>
        </div>
        <div className = "explore-icon menu-icon-right">
            <a href = "#"><i className="fas fa-globe"></i></a>
        </div>
    </header>
      <NavBar handleMenu = {props.handleMenu} isAuthenticated ={props.isAuthenticated} getMenuState = {props.getMenuState}/>
    
      <Slider/>
	</div>);
}

export default TravelContainer;