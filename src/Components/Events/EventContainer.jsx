import React from "react";
import Events from './Events'

function EventContainer(props) {
    return(<div>
        <Events url={props.url}/>
    </div>)
}

export default EventContainer;