import React from "react";
import { Link } from "react-router-dom";



function NavBar(props) {
  return( 
		<header>
			<nav>
				<ul className = "nav-links">
					<li>
						<Link to = "/countries">
							<i className="fas fa-globe"></i>
						</Link>	
					</li>
					<li>
						<Link to = "/Login">
							<i className="fas fa-user-circle"></i>
						</Link>	
					</li>
				</ul>
				<div className = "logo">Escapists</div>	
				<ul className = "nav-links">
					<li>
						<Link to = "/countries">
							<i className="fas fa-globe"></i>
						</Link>	
					</li>
					<li>
						<Link to = "/Login">
							<i className="fas fa-user-circle"></i>
						</Link>	
					</li>
				</ul>
			</nav>
		</header>);
}

export default NavBar;