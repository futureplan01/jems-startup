import React, { Component } from "react";
import { Link } from "react-router-dom";



function NavBar(props) {
  return( 
		<header>
			<nav>
				<div className = "logo">Escapists</div>	
				<ul className = "nav-links">
					<li>
						<a href = "#">
							<i className="fas fa-globe"></i>
						</a>	
					</li>
					<li>
						<a href = "#">
							<i className="fas fa-user-circle"></i>
						</a>	
					</li>
				</ul>

			</nav>
		</header>);
}

export default NavBar;