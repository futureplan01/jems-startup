import React from "react";
import Slider from "../Basics/Slider";
import AllCountries from "./AllCountries";
import NavBar from "../Basics/NavBar";

function CountryContainer(props) {
    return(<div>
        <NavBar/>
        <Slider/>
        <AllCountries  url ={props.url}/>
    </div>)
}

export default CountryContainer;