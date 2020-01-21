import React, {Component} from "react";
import axios from "axios";


class Event extends Component{
    constructor(){
        super();
        this.state = {
            data:[]

        }
    }
    componentDidMount(){   
        axios.get(`${this.props.url}` + "all-events" )
        .then((res)=>{
          console.log(res.data);
          this.setState({data: res.data})
        })
        .catch((err) => {
          console.log("Error:" + err);
        })
    }
    render(){
        return(<div>
            {this.state.data((event, i)=>{
                return (<div key= {i}>
                    {event}
                </div>)
            })}
        </div>)

    }

}
export default Event;