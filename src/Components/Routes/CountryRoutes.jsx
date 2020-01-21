import React from "react";
import { Route } from "react-router-dom";
import SpainContainer from "../Events/Countries/SpainContainer"
import FranceContainer from "../Events/Countries/FranceContainer"
import IceLandContainer from "../Events/Countries/IceLandContainer"
import PortugalContainer from "../Events/Countries/PortugalContainer"

function CountryRoutes(props) {
    return(<div>
        <Route exact path="/Spain" render={() => 
          <SpainContainer url={props.url} Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>
        <Route exact path="/France" render={() => 
          <FranceContainer url={props.url} Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>
        <Route exact path="/IceLand" render={() => 
          <IceLandContainer url={props.url} Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>
        <Route exact path="/Portugal" render={() => 
          <PortugalContainer url={props.url} Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>
    </div>)
}

export default CountryRoutes;