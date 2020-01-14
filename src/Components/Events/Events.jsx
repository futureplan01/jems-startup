import React, {Component} from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';


class Event extends Component{
    constructor(){
        super();
        this.state = {
            data:{}
        }
    }
    componentDidMount(){   
        axios.get(`${this.props.url}` + "all-events" )
        .then((res)=>{
          console.log(res);
        })
        .catch((err) => {
          console.log("Error:" + err);
        })
    }
    render(){
        return(<div>
            {this.state.data}
        </div>)
    }

}
export default Event;