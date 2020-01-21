import React, {Component} from "react";
import axios from "axios";


class Event extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
        this.getEvents = this.getEvents.bind(this);
    }

    getEvents(Event){

    }

    render(){
        return(<div>
            <div>
                <button onClick={this.getEvents}> All</button>
            </div>
            <div>
                <button onClick={this.getEvents}>Romance</button>
            </div>
            <div>
                <button onClick={this.getEvents}>Relaxation</button>
            </div>
            <div>
                <button onClick={this.getEvents}>Adventure</button>
            </div>
        </div>)

    }

}
export default Event;