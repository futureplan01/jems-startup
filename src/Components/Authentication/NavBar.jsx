import React, { Component } from "react";
import { Link } from "react-router-dom";



function NavBar(props) {
  let showing = "";
  let navChildren = <div><li><Link to ='/SignUp'>Sign-Up</Link></li><li><Link to ='/'>Log-In</Link></li></div>
  if(props.getMenuState()){
     showing = "showing";   
  }
  
  if(props.isAuthenticated()){
    navChildren = <div><li><Link to ='/' onClick ={props.logOut}>Log Out</Link></li></div>
  }
  return( 
    <header>
    <nav>
        <ul class = "nav-links">
            <li><a class= "nav-link" href ="">Explore</a></li>
            <li><a class= "nav-link" href="">About</a></li>
            <li><a class= "nav-link" href="">Contact</a></li>
        </ul>
			
        <footer>
            <div class = "company-info">
                JEMS
                <br/>
                2019
            </div>
            <ul class = "social-links">
                <li><a href="#"><i class="fab fa-facebook-square fa-2x"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram fa-2x"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter-square fa-2x"></i></a></li>
            </ul>
        </footer>	 	
    </nav>
  </header>);
}

export default NavBar;