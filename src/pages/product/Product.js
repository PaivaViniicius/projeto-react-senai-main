import imgProduto from "../../img/imgProduto.png"
function Product(){

    return(
        <div>
            <img className='background-img' src={imgProduto} />
            <h1 className='title'>Produto</h1>
        </div>
    )
}
export default Product