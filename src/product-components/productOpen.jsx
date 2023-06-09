import { useParams } from "react-router-dom";
import useFetch from "./productFetcher";
import AddToCartBtn from "../addToCartBtn";
import { useContext } from "react";
import { CartContext } from "../cart-components/cartContext";
import Item from "./product";
import Alert from "../alert";
function ProductOpen(){
    const {id}= useParams();
    const {product}=useFetch(`http://localhost:3000/product/`+ id);
    const {addToCartMessage}=useContext(CartContext);

    return(
        <div>
      
         
        {product && (
            <div >
                <h2 className="productOpen-h2">Product information</h2>
                {addToCartMessage ? <Alert type="success"><p className='addToCartMessage'>successfully added to cart<span>✔️</span></p></Alert>:""}
            <div className="product-details">
            <div className="productDescription-col1">
                <img className="product-photo" src={product.photo} alt="" />
                <h2 className="product-name">{product.name}</h2>
                <div className="qp"><p>Quantity</p><div className="amount">5kg</div></div>
                <div className="qp"><p>price</p><div className="amount">₦{product.price}</div></div>
                </div>

             <div className="productDescription-col2">
             <p className="product-description">{product.description}</p>
             {/* <h3>Farmer</h3>
                <div>

                </div> */}
             <AddToCartBtn product={product} addToCartBtn={"addBtn"}/>
               <h3>Nutritional value</h3>
              <dl>
              <dt>The product is low in calories and high in nutrients.One ounce of the product (approximately 166g) contains:</dt>
                <dd><li>calories:53</li></dd>
                <dd><li>carbohydrates:13 grams</li></dd>
                <dd><li>Fibre: 3grams</li></dd>
                <dd><li>Protein: 1gram</li></dd>
                <dd><li>Fat: 0.5grams</li></dd>
              </dl>
             </div>
               
            </div>
            <div>
                <h2 className="productOpen-h2">More products like {product.name}</h2>
                <div className="more-products">
                    <Item productType={product.type} productClass={"productInMore"}/>
                </div>
            </div>
            </div>
        ) }
        </div>
    )
}
export default ProductOpen;