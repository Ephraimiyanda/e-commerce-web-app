import { useContext } from "react";
import { CartContext } from "./cart-components/cartContext";


function AddToCartBtn({product}){
    const {addToCart} = useContext(CartContext);
   
const handleCart=(product)=>{
addToCart(product);
console.log(product)
}
return(
    <button className="add-to-cart-btn" onClick={()=>{handleCart(product)}} >Add to cart</button>
)
}
export default AddToCartBtn;
