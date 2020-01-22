import React from "react";
import IceLand from "./IceLand";


function IceLandContainer(props) {
    return(<div>
        <IceLand name={props.name} url={props.url}/>
    </div>)
}

export default IceLandContainer