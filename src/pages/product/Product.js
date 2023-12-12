import imgProduto from "../../img/imgProduto.png"
import InformationTextProduct from "../../components/informationTextProduct/informationTextProduct"
import "./Product.css"
import ImgAcaraje from "../../img/imgAcaraje.jpg"
import imgVatapa from "../../img/imgVatapa.jpg"
function Product() {

    return (
        <div>
            <img className='background-img' src={imgProduto} />
            <h1 className='title'>Comidas Tipicas</h1>
            <div className="text-Inicial-Produto">
            <img className="imgAcaraje" src={ImgAcaraje}/>
                <InformationTextProduct
                h2Content="Acarajé"
                pContent="O acarajé é um prato tradicional da culinária afro-brasileira, originário da Bahia. 
                Consiste em uma massa frita feita de feijão-fradinho, cebola e sal, recheada com vatapá 
                (creme de camarões secos, amendoim, leite de coco e temperos). Frito em azeite de dendê, 
                o acarajé é conhecido por seus sabores intensos e é frequentemente associado a celebrações 
                culturais e religiosas. É vendido por mulheres conhecidas como baianas e representa um símbolo 
                da diversidade alimentar e cultural do Brasil."
                />
            </div>
            <div className="text-Inicial-Produto2">
            <img className="imgAcaraje" src={imgVatapa}/>
                <InformationTextProduct
                h2Content="Vatapá"
                pContent="O vatapá é um prato tradicional nordestino do Brasil, especialmente associado à Bahia. É um creme feito com pão, camarões secos, amendoim, 
                leite de coco, azeite de dendê e temperos. Sua textura cremosa e sabor marcante o tornam um componente essencial em receitas como o acarajé. 
                Além de ser apreciado por suas características gastronômicas, o vatapá possui relevância cultural, sendo parte integrante de festividades na região nordeste."
                />
            </div>
        </div>

    )
}
export default Product