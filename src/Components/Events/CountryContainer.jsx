import React from "react";
import Slider from "../Authentication/Slider";
import AllCountries from "./AllCountries";

function CountryContainer(props) {
    return(<div>
        <Slider/>
        <AllCountries  url ={props.url}/>
    </div>)
}

export default CountryContainer;