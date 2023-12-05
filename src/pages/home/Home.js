import logoPrincipal from "../../img/logoPrincipal.png"
import fundo from "../../img/fundo.jpg"
import './Home.css'

function Home() {

    return (
        <div class='inicial'>
            <h1>Restaurante Maria Bonita</h1>
            <img src={logoPrincipal}/>
            <img src={fundo} class="alo"/>
        </div>
        
    )

}
export default Home