import React, {Component} from "react";
import axios from "axios";
import NavBar from "../Authentication/NavBar";

import {Redirect, Link} from 'react-router-dom';


class AllCountries extends Component{
    constructor(){
        super();
        this.state = {
            Countries:[]
        }
    }
    componentDidMount(){   

    }
    render(){
        return(
        <div>
        <NavBar/>
        <div className = "countries">
            <h1><Link to="/Spain">Spain</Link></h1>
            <h1><Link to="/France">France</Link></h1>
            <h1><Link to="/Iceland">Iceland</Link></h1>
            <h1><Link to="/Portugal">Portugal</Link></h1>
        </div>
        </div>)
    }

}
export default AllCountries;