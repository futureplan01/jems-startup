import React, { Component } from "react";
import { Link } from "react-router-dom";



function NavBar(props) {
  return( 
		<header>
			<nav>
				<div class = "logo">Escapists</div>	
				<ul class = "nav-links">
					<li>
						<a href = "#">
							<i class="fas fa-globe"></i>
						</a>	
					</li>
					<li>
						<a href = "#">
							<i class="fas fa-user-circle"></i>
						</a>	
					</li>
				</ul>

			</nav>
		</header>);
}

export default NavBar;