import logoPrincipal from "../../img/logoPrincipal.png"
import './Home.css'
import InformationText from "../../components/informationText/InformationText"

function Home() {

    return (
        <div class='inicial'>
            <h1>Restaurante Maria Bonita</h1>

            <div class="img">
                <img src={logoPrincipal} />

                <InformationText
                    pContent="Bem-vindos ao Maria Bonita, o restaurante que traz até você a autenticidade e o calor das comidas caseiras preparadas com carinho e tradição. Em nosso acolhedor ambiente, buscamos proporcionar uma experiência gastronômica única, onde cada prato é cuidadosamente elaborado para despertar memórias afetivas e sabores que remetem à comida feita em casa."
                />

            </div>


        </div>



    )

}
export default Home