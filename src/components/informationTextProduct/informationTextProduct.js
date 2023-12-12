import React from "react";
import './informationTextProduct.css'

function InformationTextProduct(props) {

    return(
        <div className="information-text-product">
            <h2>{props.h2Content}</h2>
            <h3>{props.h3Content}</h3>
            <p>
                {props.pContent}
            </p>
        </div>
    )

}
export default InformationTextProduct
