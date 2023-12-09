import logoPrincipal from "../../img/logoPrincipal.png"
import './Home.css'
import InformationTextHome from "../../components/informationTextHome/informationTextHome"

function Home() {

    return (
        <div className='inicial'>

            <div className="img">
                <img src={logoPrincipal} />

                <InformationTextHome
                    pContent="Bem-vindos ao Maria Bonita, o restaurante que traz até você a autenticidade e o calor das comidas 
                    caseiras preparadas com carinho e tradição. Em nosso acolhedor ambiente, buscamos proporcionar uma 
                    experiência gastronômica única, onde cada prato é cuidadosamente elaborado para despertar memórias 
                    afetivas e sabores que remetem à comida feita em casa."
                />

            </div>


        </div>



    )

}
export default Home