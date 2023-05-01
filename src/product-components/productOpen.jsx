import { useParams } from "react-router-dom";
import useFetch from "./productFetcher";
import AddToCartBtn from "../addToCartBtn";
function ProductOpen(){
    const {id}= useParams();
    const {product}=useFetch(`http://localhost:8000/product/`+ id);
   


    return(
        <div className="product-details">
        {product && (
            <div>
                <img className="product-photo" src={product.photo} alt="" width="100px"/>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
               <AddToCartBtn product={product}/>
            </div>
        ) }
        </div>
    )
}
export default ProductOpen;