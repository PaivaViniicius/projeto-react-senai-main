import React from "react";
import InformationText from "../../components/informationText/InformationText";

function Info() {
    return (
        <div>
            <h1>Sobre o restaurante</h1>
            <InformationText
                h2Content="Sobre nós"
                pContent="Bem-vindo a Maria Bonita  Cozinha da Mamãe,
                 um legado que teve início em 1970, quando Dona Maria,
                  uma mulher apaixonada pela culinária caseira,
                   decidiu compartilhar o calor de sua cozinha com a comunidade.
                    Com um punhado de receitas tradicionais transmitidas de geração em geração,
                     ela abriu as portas de seu pequeno restaurante,
                      transformando-o em um refúgio acolhedor onde os sabores autênticos
                       da comida caseira ganhavam vida."
            />
            <br />
            <InformationText
                h2Content="Nossa gastronomia"
                pContent="Oferecemos uma experiência gastronômica autêntica e acolhedora.
                        Nosso cardápio destaca pratos caseiros tradicionais,
                        preparados com ingredientes frescos e sazonais. Em um ambiente caloroso,
                        convidamos os clientes a desfrutarem de uma atmosfera familiar,
                        onde cada refeição é uma celebração da culinária caseira e uma viagem de volta às raízes.
                        Nossa equipe dedicada proporciona um serviço amigável,
                        tornando cada visita uma experiência que alimenta tanto o corpo quanto a alma."
            />
        </div>
    );
}

export default Info;