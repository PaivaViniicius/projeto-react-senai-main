import './mapa.css';

function MapaRestaurante() {
    return (
        <div className="mapaRestaurante">
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.4602176416124!2d-48.49909449999999!3d-27.548224100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527475e01a8efef%3A0x5b0f13adab8483ec!2sSENAI%20Florian%C3%B3polis%20(CTAI)!5e0!3m2!1spt-BR!2sbr!4v1702344290201!5m2!1spt-BR!2sbr"
                />  
        </div>
    );
}

export default MapaRestaurante;