import React from "react";
import { Route } from "react-router-dom";
import Category from "../Itinerary/Category"
import InfoPage from "../Itinerary/InfoPage"
import NewOrExperienced from "../Itinerary/NewOrExperienced"
import Name from "../Itinerary/Name"
import LoadingPage from "../Itinerary/LoadingPage"
import PickCountry from "../Itinerary/PickCountry"
import NumberOfTravelers from "../Itinerary/NumberOfTravelers"



function ItineraryRoutes(props) {
  
    return(<div> 
        <Route exact path="/Name" render={() => 
          <Name url={props.url} name="Spain"  Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>
        <Route exact path="/Category" render={() => 
          <Category url={props.url} name="France" Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>
        <Route exact path="/PickCountry" render={() => 
          <PickCountry url={props.url} name="Portugal" Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/> 
        <Route exact path="/NewOrExperienced" render={() => 
          <NewOrExperienced url={props.url} name="Portugal" Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/> 
        <Route exact path="/NumberOfTravelers" render={() => 
          <NumberOfTravelers url={props.url} name="Portugal" Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>
        <Route exact path="/InfoPage" render={() => 
          <InfoPage url={props.url} name="Portugal" Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>
        <Route exact path="/LoadingPage" render={() => 
          <LoadingPage url={props.url} name="Portugal" Authenticate = {props.Authenticate} isAuthenticated = {props.isAuthenticated} handleMenu = {props.handleMenu} getMenuState = {props.getMenuState}/>
        }/>

    </div>)
}

export default ItineraryRoutes;