import React from "react";
import InformationText from "../../components/informationText/InformationText";

function Info() {
    return (
        <div>
            <h1 className="title">Sobre o restaurante</h1>
            <InformationText
                h2Content="Sobre nós"
                pContent="Bem-vindos ao Maria Bonita, o restaurante que traz até você 
                a autenticidade e o calor das comidas caseiras preparadas com carinho e
                 tradição. Em nosso acolhedor ambiente, buscamos proporcionar uma experiência
                  gastronômica única, onde cada prato é cuidadosamente elaborado para despertar
                   memórias afetivas e sabores que remetem à comida feita em casa.."
            />
            <br />
            <InformationText
                h2Content="Nossa gastronomia"
                pContent="Nossos chefs dedicam-se a selecionar os ingredientes mais frescos e de alta qualidade,
                 garantindo que cada refeição seja uma verdadeira celebração do paladar. Do arroz e feijão ao frango assado,
                passando pelos pratos típicos da culinária local, cada opção do cardápio reflete a paixão pela cozinha caseira
                e o compromisso com o bem-estar dos nossos clientes.
                No Maria Bonita, não apenas servimos comida, mas compartilhamos momentos especiais em torno da mesa.
                Seja para um almoço em família, um jantar romântico ou uma reunião entre amigos, aqui, todos são bem-vindos
                para desfrutar da simplicidade e do sabor inigualável das comidas que nos remetem às origens e à tradição.
                Convidamos você a se juntar a nós e explorar o verdadeiro prazer de uma refeição caseira, onde cada garfada
                é recheada de afeto e tradição. No Sabor de Casa, a cozinha é mais do que uma arte, é uma experiência que 
                alimenta não apenas o corpo, mas também a alma. Esperamos recebê-lo em breve para compartilhar momentos deliciosos
                e memoráveis.."
            />
        </div>
    );
}

export default Info;