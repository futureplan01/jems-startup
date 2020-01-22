import React, {Component} from "react";
import FormData from "form-data"
import axios from "axios";


class IceLand extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
        this.getEvents = this.getEvents.bind(this);
    }

    /*
        All Events
        Romance
        Relax
        Adventure
    */

    getEvents(event){
        let category = ""
        let fd = new FormData();
        console.log(event.target.name);
        console.log(this.props.name);
        fd.append('Country', this.props.name)
        fd.append('Category', event.target.name)
        axios
        .get(this.props.url + 'country-events',fd)
        .then((res)=>{
            console.log(res)
            this.setState({data: res.data})
        })
    }

    render(){
        return(<div>
            <div>
                <button onClick={this.getEvents} name="All"> All</button>
            </div>
            <div>
                <button onClick={this.getEvents} name="Romance">Romance</button>
            </div>
            <div>
                <button onClick={this.getEvents} name="Relax">Relaxation</button>
            </div>
            <div>
                <button onClick={this.getEvents} name="Adventure">Adventure</button>
            </div>
            {this.state.data}
        </div>)

    }

}
export default IceLand;