import React from "react";
import Portugal from "./Portugal"


function PortugalContainer(props) {
    return(<div>
        <Portugal name={props.name} url={props.url}/>
    </div>)
}

export default PortugalContainer