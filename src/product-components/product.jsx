
import { Link } from "react-router-dom";
import AddToCartBtn from "../addToCartBtn";
import useFetch from "./productFetcher";

const Item=({productType,productClass})=>{
const {product}=useFetch(`http://localhost:8000/product`);

 

    return( 
        <div className={productClass}>
            {product.map((product,index)=>(
           
           <section key={index} className={product.type === productType ? ("white-background"):("no-display")}>
           <img src={product.photo} alt="" />
           
           <div>
               <button className="like-btn"></button>
              <Link className="product-link" to={`/product/${product.id}`}>
              <h2>{product.name}</h2>
               <h3>₦{product.price}</h3>
              </Link>
              <AddToCartBtn product={product} addToCartBtn={"add-to-cart-btn"}/>
           </div>   
                    </section>
       ))}  
        </div>
 
           
       
    )   
    

}
export default Item;