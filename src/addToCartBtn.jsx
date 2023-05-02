import { useContext } from "react";
import { CartContext } from "./cart-components/cartContext";


function AddToCartBtn({product,addToCartBtn}){
    const {addToCart} = useContext(CartContext);
   
const handleCart=(product)=>{
addToCart(product);
console.log(product)
}
return(
    <button className={addToCartBtn} onClick={()=>{handleCart(product)}} >Add to cart</button>
)
}
export default AddToCartBtn;
