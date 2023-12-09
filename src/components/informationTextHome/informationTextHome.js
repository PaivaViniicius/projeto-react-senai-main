import React from "react";
import './informationTextHome.css'

function InformationTextHome(props) {

    return(
        <div className="information-text-home">
            <h2>{props.h2Content}</h2>
            <p>
                {props.pContent}
            </p>
        </div>
    )

}
export default InformationTextHome
