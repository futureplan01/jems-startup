import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import Home from "./Authentication/Home";

function HomeContainer(props) {
    return( 
    <div  className = "container">
      <NavBar isAuthenticated ={props.isAuthenticated} logOut={props.logOut} handleMenu={props.handleMenu}  getMenuState={props.getMenuState}/>
      <Slider/>
      <Home  url ={props.url} isAuthenticated ={props.isAuthenticated} handleMenu = {props.handleMenu}  getMenuState = {props.getMenuState}/>
	</div>);
}

export default HomeContainer;