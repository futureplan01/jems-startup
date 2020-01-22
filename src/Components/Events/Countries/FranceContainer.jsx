import React from "react";
import France from './France'


function FranceContainer(props) {
    return(<div>
        <France name={props.name} url={props.url}/>
    </div>)
}

export default FranceContainer;