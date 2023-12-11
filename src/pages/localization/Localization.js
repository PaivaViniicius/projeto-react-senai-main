import React from "react";
import './localization.css'
import { iframe } from "react";
import mapSenai from "../../img/mapSenai.png"
import imgHome from "../../img/imgHome.png"

function Localization() {

    return (
        <div className="img">
            <img className='background-image-info' src={imgHome} />
            <div className="map">
                <h1>Localização</h1>
                <a href="https://abrir.link/PEph6" target="_blank">
                    <img className="img-Map" src={mapSenai} alt="Mapa do Senai" />
                </a>
            </div>

        </div>

    );

}
export default Localization