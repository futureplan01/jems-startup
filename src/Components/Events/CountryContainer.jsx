import React from "react";
import Slider from "../Authentication/Slider";
import AllCountries from "./AllCountries";
import NavBar from "../Authentication/NavBar";

function CountryContainer(props) {
    return(<div>
        <NavBar/>
        <Slider/>
        <AllCountries  url ={props.url}/>
    </div>)
}

export default CountryContainer;