import React from "react";
import { Link } from "react-router-dom";


function Welcome(props) {
  return( 
    <div id = "welcome-section">
    <div className = "welcome-message">
        Inspired Travel For Inspirational Travelers
    </div>
    <div style={{color: "white"}}>
        Trips perfectly curated with each type of traveller in mind. Ready, Book Embark.
    </div>
    <div > 
        <Link to ="/Countries">Start Your Journey </Link>
    </div>

</div> );
}

export default Welcome;