import React from "react";

import NavBar from "../Basics/NavBar";
import Slider from "../Basics/Slider";
import Login from "./Login";

function LoginContainer(props) {
    return( 
    <div  className = "container">
      <NavBar handleMenu = {props.handleMenu} isAuthenticated ={props.isAuthenticated} getMenuState = {props.getMenuState}/>
      <Slider/>
      <Login url ={props.url} Authenticate = {props.Authenticate} isAuthenticated ={props.isAuthenticated} handleMenu = {props.handleMenu}  getMenuState = {props.getMenuState}/>
		</div>);
}

export default LoginContainer;