import React, {Component} from "react";
import FormData from "form-data"
import axios from "axios";


class Spain extends Component{
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
        let fd = new FormData();
        fd.append('Country', this.props.name)
        fd.append('Category', event.target.name)

        console.log(fd.get('Country'))
        console.log(fd.get('Category'))
        axios
        .post(this.props.url + 'country-events',fd,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res)=>{
            console.log(res.data)
            this.setState({data: res.data})
        })
        .catch((err)=>{
            console.log(err);
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
            {this.state.data.map((event, i)=>{
               return <div key={i}>
                   <div>
                       <h1>{event.Event}</h1>
                       <a style={{color: 'blue'}} href={event.BookingUrl}>website</a>
                   </div>
               </div>
            })}
        </div>)

    }

}
export default Spain;