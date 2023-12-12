import React from "react";
import './localization.css'
import { iframe } from "react";
import imgHome from "../../img/imgHome.png"
import MapaSenai from "../../components/mapa/mapa";
import MapaRestaurante from "../../components/mapa/mapa";

function Localization() {

    return (
        <div className="img">
            <img className='background-image-info' src={imgHome} />
            <div className="map">
                <h1>Localização</h1>
                <p>Nosso local está localizado em Florianópolis na marginal da SC-401, próximo ao Floripa Shopping. Possui um ótimo estacionamento e de fácil acesso. Venha nos conhecer!</p>
                <MapaRestaurante/>
            </div>
        </div>

    );

}
export default Localization