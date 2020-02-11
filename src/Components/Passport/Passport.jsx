import React, {Component} from 'react';
import { Link } from "react-router-dom";


class Passport extends Component {
  render() {

    return (<div>
        <h1>  Pass Port Page</h1>
        <h2> <Link to ="/Flight">Flight </Link></h2>
        <h2><Link to ="/Lodging">Lodging</Link></h2>
        <h2><Link to = "/Itinerary">Itinerary</Link></h2>
    </div>);
  }
}


export default Passport;